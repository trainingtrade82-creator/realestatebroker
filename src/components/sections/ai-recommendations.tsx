"use client";

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { getAiRecommendations } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send, User, Loader2, MessageSquareQuote } from 'lucide-react';
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
  const [state, formAction] = useActionState(getAiRecommendations, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === "success" && state.recommendations.length > 0) {
      toast({
        title: "We found some properties for you!",
        description: "Check out the recommendations below.",
      });
      formRef.current?.reset();
    } else if (state.message === "success" && state.recommendations.length === 0) {
       toast({
        title: "No specific recommendations found.",
        description: "Try broadening your search criteria.",
      });
    }
    else if (state.message === "Validation failed" || state.message === "An error occurred while fetching recommendations.") {
      const errorMsg = state.errors?.userPreferences?.[0] || "Something went wrong.";
      toast({
        variant: "destructive",
        title: "Oops!",
        description: errorMsg,
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center">
             <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
               <MessageSquareQuote className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl">Have a Question?</CardTitle>
            <CardDescription className="text-lg mt-2">
              Request a private consultation or send us an inquiry. Our team is here to help you with your real estate needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="userPreferences" className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5"/>
                  Your Message
                </Label>
                <Textarea
                  id="userPreferences"
                  name="userPreferences"
                  placeholder="e.g., 'I'm interested in fractional ownership opportunities in Miami. Please provide more information...'"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Send Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
