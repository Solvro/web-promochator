import type { SupervisorResponse } from "./supervisor";

export interface RawApiRecommendation {
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
  recommended_supervisors: SupervisorResponse[];
}

interface Metadata {
  run_id: string;
  feedback_tokens: any[];
}

export type RecommendationResponse = Omit<
  RawApiRecommendation["output"],
  "retrieved_docs" | "prompt" | "metadata"
>;

export interface RecommendationRequest {
  input: {
    question: string;
    faculty?: string;
  };
}
