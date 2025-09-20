"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { getAiRecommendations } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: "",
  errors: null,
  recommendations: [],
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Get Recommendations
    </Button>
  );
}

export default function AiRecommendations() {
  const [state, formAction] = useFormState(getAiRecommendations, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === "success") {
      toast({
        title: "We found some properties for you!",
        description: "Check out the recommendations below.",
      });
      formRef.current?.reset();
    } else if (state.message === "Validation failed" || state.message === "An error occurred while fetching recommendations.") {
      const errorMsg = state.errors?.userPreferences?.[0] || "Something went wrong.";
      toast({
        variant: "destructive",
        title: "Oops!",
        description: errorMsg,
      });
    }
  }, [state, toast]);

  return (
    <section id="ai-recommender" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center">
             <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
               <Bot className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl">Find Your Perfect Match with AI</CardTitle>
            <CardDescription className="text-lg mt-2">
              Describe your dream home, and our AI will curate a personalized list of properties just for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="userPreferences" className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5"/>
                  What are you looking for?
                </Label>
                <Textarea
                  id="userPreferences"
                  name="userPreferences"
                  placeholder="e.g., 'A modern 3-bedroom apartment in a quiet neighborhood with a lot of natural light, a home office, and close to a park...'"
                  rows={5}
                  required
                />
              </div>
              <SubmitButton />
            </form>

            {state.recommendations && state.recommendations.length > 0 && (
              <div className="mt-8">
                <h3 className="font-headline text-2xl mb-4 text-center">Your Personalised Recommendations</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {state.recommendations.map((rec, index) => (
                    <li key={index} className="bg-background/50 p-4 rounded-lg border flex items-center gap-3">
                      <Bot className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
