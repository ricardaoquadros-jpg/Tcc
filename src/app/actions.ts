
'use server';

import {
  explainFrontendVsBackend,
  type ExplainFrontendVsBackendInput,
} from '@/ai/flows/explain-frontend-vs-backend';
import {
  explainTechInApp,
  type ExplainTechInAppInput,
} from '@/ai/flows/explain-tech-in-app';

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

export async function getTechExplanation(
  input: ExplainTechInAppInput
): Promise<string> {
  try {
    const result = await explainTechInApp(input);
    return result.explanation;
  } catch (error) {
    console.error('Error calling AI flow:', error);
    throw new Error('Failed to get tech explanation from AI.');
  }
}
