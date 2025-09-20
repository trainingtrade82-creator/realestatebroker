"use server";

import { personalizedPropertyRecommendations, PersonalizedPropertyRecommendationsInput } from "@/ai/flows/personalized-property-recommendations";
import { z } from "zod";

const inputSchema = z.object({
  userPreferences: z.string().min(10, { message: "Please describe your preferences in more detail." }),
});

export async function getAiRecommendations(prevState: any, formData: FormData) {
  const validatedFields = inputSchema.safeParse({
    userPreferences: formData.get('userPreferences'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
      recommendations: [],
    };
  }

  const aiInput: PersonalizedPropertyRecommendationsInput = {
    userPreferences: validatedFields.data.userPreferences,
    browsingBehavior: 'User has been viewing luxury villas in coastal areas and penthouses in major cities.',
    // Optional filters can be added here in the future
  };

  try {
    const result = await personalizedPropertyRecommendations(aiInput);
    if (result && result.propertyRecommendations) {
       return {
        message: "success",
        errors: null,
        recommendations: result.propertyRecommendations,
      };
    }
    throw new Error("No recommendations returned from AI.");

  } catch (error) {
    return {
      message: "An error occurred while fetching recommendations.",
      errors: null,
      recommendations: [],
    };
  }
}
