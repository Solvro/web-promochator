import type { Supervisor } from "./supervisor";

interface RawApiResponse {
  output: {
    faculty: string;
    question: string;
    retrieved_docs: any[];
    prompt: string;
    recommendation: Recommendation;
  };
  metadata: Metadata;
}

interface Recommendation {
  hello_message: string;
  recommended_supervisors: Supervisor[];
}

interface Metadata {
  run_id: string;
  feedback_tokens: any[];
}

export type ApiResponse = Omit<
  RawApiResponse["output"],
  "retrieved_docs" | "prompt" | "metadata"
>;

export interface ApiRequest {
  input: {
    question: string;
    faculty?: string;
  };
}
