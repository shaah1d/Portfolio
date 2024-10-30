"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,

  FormField,
  FormItem,

  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  question: z.string().min(2, {
    message: "question must be at least 2 characters.",
  }),
});
interface QuestionPromptProps {
    onInfoUpdate: (newInfo: string) => void;
  }


  
const QuestionPrompt: React.FC<QuestionPromptProps> = ({ onInfoUpdate }) => {

   
 
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "", 
    },
  });

  const { reset } = form;

  const onSubmit = (data: any) => {
    console.log("QuestionPrompt: ", data.question);
    onInfoUpdate(data.question);
   reset();
  };

  return (
    <div className="max-w-[500px] mx-auto">
      <div className="border-2 border-black rounded-full overflow-hidden p-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input 
                      placeholder="Ask your question?" 
                      {...field} 
                      className="border-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="bg-yellow-500 hover:bg-yellow-600 rounded-full h-8 w-8 p-0 flex items-center justify-center"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default QuestionPrompt;
