
'use server';

/**
 * @fileOverview Explains the role of a specific technology within a given application.
 *
 * - explainTechInApp - A function that explains a technology's role in an app.
 * - ExplainTechInAppInput - The input type for the explainTechInApp function.
 * - ExplainTechInAppOutput - The return type for the explainTechInApp function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ExplainTechInAppInputSchema = z.object({
  applicationName: z
    .string()
    .describe('The name of the application (e.g., Netflix, Google).'),
  technologyName: z
    .string()
    .describe(
      'The name of the technology to explain (e.g., React, Node.js).'
    ),
});
export type ExplainTechInAppInput = z.infer<typeof ExplainTechInAppInputSchema>;

const ExplainTechInAppOutputSchema = z.object({
  explanation: z
    .string()
    .describe(
      'A concise explanation of the technology\'s role within the specified application.'
    ),
});
export type ExplainTechInAppOutput = z.infer<
  typeof ExplainTechInAppOutputSchema
>;

export async function explainTechInApp(
  input: ExplainTechInAppInput
): Promise<ExplainTechInAppOutput> {
  return explainTechInAppFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainTechInAppPrompt',
  input: { schema: ExplainTechInAppInputSchema },
  output: { schema: ExplainTechInAppOutputSchema },
  prompt: `You are a senior software engineer explaining how a specific technology is used in a famous application.

  Application: {{{applicationName}}}
  Technology: {{{technologyName}}}

  Based on public knowledge, explain the role of {{{technologyName}}} at {{{applicationName}}}.
  Be concise and focus on one or two key functionalities. For example, how Netflix uses React for its dynamic UI, or how Discord uses Rust for high-performance real-time communication.
  The explanation should be a single paragraph.
  `,
});

const explainTechInAppFlow = ai.defineFlow(
  {
    name: 'explainTechInAppFlow',
    inputSchema: ExplainTechInAppInputSchema,
    outputSchema: ExplainTechInAppOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
