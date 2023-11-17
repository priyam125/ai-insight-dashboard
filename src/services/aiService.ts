// src/services/aiService.ts
import { AIData } from "../type";
import { aiData } from "../utils/data";

export const fetchAIData = async (): Promise<AIData> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return aiData;
};
