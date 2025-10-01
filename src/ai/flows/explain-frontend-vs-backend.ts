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
      'Os objetivos de aprendizado do usuário para entender as diferenças entre o desenvolvimento frontend e backend.'
    ),
});
export type ExplainFrontendVsBackendInput = z.infer<
  typeof ExplainFrontendVsBackendInputSchema
>;

const ExplainFrontendVsBackendOutputSchema = z.object({
  explanation: z
    .string()
    .describe(
      'Uma explicação das principais diferenças entre o desenvolvimento de frontend e backend, adaptada aos objetivos de aprendizado do usuário.'
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
  prompt: `Você é um especialista em desenvolvimento web full-stack. Seu trabalho é explicar as principais diferenças entre frontend e backend para usuários com diferentes objetivos de aprendizado.

  O usuário tem os seguintes objetivos de aprendizado: {{{learningGoals}}}

  Com base nesses objetivos, explique em português as diferenças entre frontend e backend. Seja claro e conciso.
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
