import type { Recommendation } from "./api-types";

export interface Chat {
  uuid: string;
  prompt: string;
  recommendation?: Recommendation;
}
