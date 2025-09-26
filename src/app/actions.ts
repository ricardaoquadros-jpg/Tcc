'use server';

import {
  explainFrontendVsBackend,
  type ExplainFrontendVsBackendInput,
} from '@/ai/flows/explain-frontend-vs-backend';

export async function getExplanation(
  input: ExplainFrontendVsBackendInput
): Promise<string> {
  try {
    const result = await explainFrontendVsBackend(input);
    return result.explanation;
  } catch (error) {
    console.error('Error calling AI flow:', error);
    throw new Error('Failed to get explanation from AI.');
  }
}
