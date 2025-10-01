
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
    .describe('O nome da aplicação (ex: Netflix, Google).'),
  technologyName: z
    .string()
    .describe(
      'O nome da tecnologia a ser explicada (ex: React, Node.js).'
    ),
});
export type ExplainTechInAppInput = z.infer<typeof ExplainTechInAppInputSchema>;

const ExplainTechInAppOutputSchema = z.object({
  explanation: z
    .string()
    .describe(
      'Uma explicação concisa do papel da tecnologia dentro da aplicação especificada.'
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
  prompt: `Você é um engenheiro de software sênior explicando como uma tecnologia específica é usada em uma aplicação famosa. Sua resposta deve ser em português.

  Aplicação: {{{applicationName}}}
  Tecnologia: {{{technologyName}}}

  Com base no conhecimento público, explique o papel de {{{technologyName}}} na {{{applicationName}}}.
  Seja conciso e foque em uma ou duas funcionalidades chave. Por exemplo, como a Netflix usa React para sua UI dinâmica, ou como o Discord usa Rust para comunicação em tempo real de alta performance.
  A explicação deve ser um único parágrafo.
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
