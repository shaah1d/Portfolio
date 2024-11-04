import { NextResponse } from 'next/server';
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { createClient } from "@supabase/supabase-js";
import { RunnablePassthrough, RunnableSequence } from '@langchain/core/runnables';
import { Document } from 'langchain/document';

// Move function outside the try block
const combineDocuments = (docs: Document[]): string => {
    return docs.map((doc) => doc.pageContent).join('\n\n');
};

export async function POST(request: Request) {
    try {
        const { question } = await request.json();
        
        if (!question) {
            return NextResponse.json(
                { error: 'Question is required' },
                { status: 400 }
            );
        }

        // Initialize Supabase client with server-side keys
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; // Use service key instead of anon key
        console.log(supabaseUrl)
        if (!supabaseUrl || !supabaseServiceKey) {
            return NextResponse.json(
                { error: 'Supabase configuration missing' },
                { status: 500 }
            );
        }

        const client = createClient(supabaseUrl, supabaseServiceKey);
        
        const embeddings = new OpenAIEmbeddings({ 
            openAIApiKey: process.env.OPEN_AI_API_KEY
        });

        const vectorStore = new SupabaseVectorStore(embeddings, {
            client,
            tableName: 'documents',
            queryName: 'match_documents'
        });
        const standAloneQuestionTemplate = "Given a question, convert it to a standalone question. question: {question}";

          // Create the prompt template
          const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standAloneQuestionTemplate);
          const answerTemplate = `You are Shaahid and you have to answer all the questions in first person based on the context provided to you, make sure to phrase the context in a polite and professinal way,
            if you don't know the answer to anything please say "I’m sorry, but I don’t have that information. Please reach out directly to writetoshaahid@gmail.com for assistance." don't try to make up answers
            do not hallucinate only answer the question if you have the context
            please also say "thats a great question" when a question is asked
          context: {context}
          question: {question}
          answer: 
     `

     const answerPrompt = PromptTemplate.fromTemplate(answerTemplate);

        // Rest of your chain logic...
        const retriever = vectorStore.asRetriever();
        const llm = new ChatOpenAI({
            openAIApiKey: process.env.OPEN_AI_API_KEY
        });
        const standaloneQuestionChain = standaloneQuestionPrompt
        .pipe(llm)
        .pipe(new StringOutputParser())

    const retrieverChain = RunnableSequence.from([
        (prevResult) => prevResult.standalone_question, // Process prevResult
        retriever, // Retriever function or object
        (docs) => combineDocuments(docs), // Combine documents
    ]);
    const answerChain = answerPrompt
        .pipe(llm)
        .pipe(new StringOutputParser())

   
      
        const chain = RunnableSequence.from([
            {
                standalone_question: standaloneQuestionChain,
                original_input: new RunnablePassthrough()
            },
            {
                context: retrieverChain,
                question: ({ original_input }) => original_input.question
            },
            answerChain
        ])

        
        // Your existing chain setup...
        const response = await chain.invoke({
            question: question,
        });

        // Ensure we're sending a properly structured response
        return NextResponse.json({
            success: true,
            response: response
        });

    } catch (error: any) {
        console.error('Chain error:', error);
        return NextResponse.json(
            { 
                success: false,
                error: error.message || 'An error occurred',
                details: error.toString()
            },
            { status: 500 }
        );
    }
}
