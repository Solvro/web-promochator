import type { SupervisorResponse } from "./supervisor";

export interface Recommendation {
  output: {
    hello_message: string;
    recommended_supervisors: SupervisorResponse[];
  };
}

export interface RecommendationRequest {
  input: {
    question: string;
    faculty?: string;
  };
}
