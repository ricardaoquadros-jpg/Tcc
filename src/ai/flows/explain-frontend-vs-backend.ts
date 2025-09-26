// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview Explains the core differences between frontend and backend development.
 *
 * - explainFrontendVsBackend - A function that explains the differences between frontend and backend development based on the user's learning goals.
 * - ExplainFrontendVsBackendInput - The input type for the explainFrontendVsBackend function.
 * - ExplainFrontendVsBackendOutput - The return type for the explainFrontendVsBackend function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainFrontendVsBackendInputSchema = z.object({
  learningGoals: z
    .string()
    .describe(
      'The user learning goals for understanding the differences between frontend and backend development.'
    ),
});
export type ExplainFrontendVsBackendInput = z.infer<
  typeof ExplainFrontendVsBackendInputSchema
>;

const ExplainFrontendVsBackendOutputSchema = z.object({
  explanation: z
    .string()
    .describe(
      'An explanation of the core differences between frontend and backend development, tailored to the user learning goals.'
    ),
});
export type ExplainFrontendVsBackendOutput = z.infer<
  typeof ExplainFrontendVsBackendOutputSchema
>;

export async function explainFrontendVsBackend(
  input: ExplainFrontendVsBackendInput
): Promise<ExplainFrontendVsBackendOutput> {
  return explainFrontendVsBackendFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainFrontendVsBackendPrompt',
  input: {schema: ExplainFrontendVsBackendInputSchema},
  output: {schema: ExplainFrontendVsBackendOutputSchema},
  prompt: `You are an expert in full-stack web development. Your job is to explain the core differences between frontend and backend development to users with different learning goals.

  The user has the following learning goals: {{{learningGoals}}}

  Based on these goals, explain the differences between frontend and backend development. Be clear and concise.
  `,
});

const explainFrontendVsBackendFlow = ai.defineFlow(
  {
    name: 'explainFrontendVsBackendFlow',
    inputSchema: ExplainFrontendVsBackendInputSchema,
    outputSchema: ExplainFrontendVsBackendOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
