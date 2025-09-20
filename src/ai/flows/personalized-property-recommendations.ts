'use server';

/**
 * @fileOverview Provides personalized property recommendations based on user preferences and browsing behavior.
 *
 * - personalizedPropertyRecommendations - A function that returns personalized property recommendations.
 * - PersonalizedPropertyRecommendationsInput - The input type for the personalizedPropertyRecommendations function.
 * - PersonalizedPropertyRecommendationsOutput - The return type for the personalizedPropertyRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedPropertyRecommendationsInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('A description of the users stated preferences.'),
  browsingBehavior: z
    .string()
    .describe('A description of the users recent browsing behavior on the site.'),
  propertyType: z.string().optional().describe('Optional: The type of property the user is looking for (e.g., house, apartment, condo).'),
  location: z.string().optional().describe('Optional: The preferred location of the property.'),
  priceRange: z
    .string()
    .optional()
    .describe('Optional: The desired price range for the property.'),
});
export type PersonalizedPropertyRecommendationsInput = z.infer<
  typeof PersonalizedPropertyRecommendationsInputSchema
>;

const PersonalizedPropertyRecommendationsOutputSchema = z.object({
  propertyRecommendations: z
    .array(z.string())
    .describe('A list of recommended properties based on user preferences and browsing behavior.'),
});
export type PersonalizedPropertyRecommendationsOutput = z.infer<
  typeof PersonalizedPropertyRecommendationsOutputSchema
>;

export async function personalizedPropertyRecommendations(
  input: PersonalizedPropertyRecommendationsInput
): Promise<PersonalizedPropertyRecommendationsOutput> {
  return personalizedPropertyRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedPropertyRecommendationsPrompt',
  input: {
    schema: PersonalizedPropertyRecommendationsInputSchema,
  },
  output: {
    schema: PersonalizedPropertyRecommendationsOutputSchema,
  },
  prompt: `You are an expert real estate agent providing personalized property recommendations.

Based on the user's preferences and browsing behavior, recommend a list of properties.

User Preferences: {{{userPreferences}}}
Browsing Behavior: {{{browsingBehavior}}}

Optional Filters:
{{#if propertyType}}Property Type: {{{propertyType}}}{{/if}}
{{#if location}}Location: {{{location}}}{{/if}}
{{#if priceRange}}Price Range: {{{priceRange}}}{{/if}}

Recommend properties that align with these preferences and behavior. Return a list of property names.

Ensure the recommendations are tailored and relevant to the user's interests.
`,}
);

const personalizedPropertyRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedPropertyRecommendationsFlow',
    inputSchema: PersonalizedPropertyRecommendationsInputSchema,
    outputSchema: PersonalizedPropertyRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
