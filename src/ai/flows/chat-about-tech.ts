
'use server';

/**
 * @fileOverview Responde a perguntas sobre uma tecnologia específica.
 *
 * - chatAboutTech - Uma função que responde a uma pergunta do usuário sobre uma tecnologia.
 * - ChatAboutTechInput - O tipo de entrada para a função chatAboutTech.
 * - ChatAboutTechOutput - O tipo de retorno para a função chatAboutTech.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatAboutTechInputSchema = z.object({
    technologyName: z.string().describe('O nome da tecnologia.'),
    question: z.string().describe('A pergunta do usuário sobre a tecnologia.'),
});
export type ChatAboutTechInput = z.infer<typeof ChatAboutTechInputSchema>;

const ChatAboutTechOutputSchema = z.object({
    answer: z
        .string()
        .describe(
            'Uma resposta concisa e útil para a pergunta do usuário sobre a tecnologia especificada.'
        ),
});
export type ChatAboutTechOutput = z.infer<
    typeof ChatAboutTechOutputSchema
>;

export async function chatAboutTech(
    input: ChatAboutTechInput
): Promise<ChatAboutTechOutput> {
    return chatAboutTechFlow(input);
}

const prompt = ai.definePrompt({
    name: 'chatAboutTechPrompt',
    input: { schema: ChatAboutTechInputSchema },
    output: { schema: ChatAboutTechOutputSchema },
    prompt: `Você é um engenheiro de software sênior e um especialista na tecnologia chamada {{{technologyName}}}. Responda à pergunta do usuário de forma clara, concisa e útil. Sua resposta deve ser em português.

Tecnologia: {{{technologyName}}}
Pergunta do usuário: {{{question}}}

Responda diretamente à pergunta. Não adicione saudações ou introduções desnecessárias.
  `,
});

const chatAboutTechFlow = ai.defineFlow(
    {
        name: 'chatAboutTechFlow',
        inputSchema: ChatAboutTechInputSchema,
        outputSchema: ChatAboutTechOutputSchema,
    },
    async (input) => {
        const { output } = await prompt(input);
        return output!;
    }
);
