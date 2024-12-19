import type { Supervisor } from "./supervisor";

interface RawApiRecommendations {
  output: {
    faculty: string;
    question: string;
    retrieved_docs: any[];
    prompt: string;
    recommendation: Recommendation;
  };
  metadata: Metadata;
}

export interface Recommendation {
  hello_message: string;
  recommended_supervisors: Supervisor[];
}

interface Metadata {
  run_id: string;
  feedback_tokens: any[];
}

export type RecommendationsResponse = Omit<
  RawApiRecommendations["output"],
  "retrieved_docs" | "prompt" | "metadata"
>;

export interface RecommendationRequest {
  input: {
    question: string;
    faculty?: string;
  };
}
