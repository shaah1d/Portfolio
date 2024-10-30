import OpenAI from 'openai';
import { NextResponse } from 'next/server';



const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY
});

export async function POST(request: Request) {
  try {
   
    const body = await request.json();


    
    const mp3 = await openai.audio.speech.create({
      model: 'tts-1',
      voice: 'echo',
      input: body.text,
    });


    const buffer = await mp3.arrayBuffer();
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': buffer.byteLength.toString(),
      },
    });
  } catch (error: any) {
    // Detailed error logging
    console.error('Speech generation error:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      response: error.response?.data,
    });

    return NextResponse.json(
      { 
        error: 'Error generating speech',
        details: error.message,
        type: error.name
      },
      { status: 500 }
    );
  }
}
