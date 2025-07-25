import type { RecommendationResponse } from "@/types/api-types";
import { describe, it, expect } from "vitest";
import { fetchData } from "@/lib/api";

describe("fetchData - nonsense input", () => {
  it(
    "returns empty array or fallback supervisor for nonsense input",
    async () => {
      const res = await fetchData<RecommendationResponse>("/recommend/invoke", {
        method: "POST",
        body: JSON.stringify({
          input: {
            question: "kocham solvro ponad wszystko",
          },
        }),
      });

      expect(res.output.recommended_supervisors.length).toBe(0);
    },
    30000 
  );
});

describe("fetchData - nonsense input", () => {
  it(
    "returns empty array or fallback supervisor for semi-nonsense input (nonsense with a keyword)",
    async () => {
      const res = await fetchData<RecommendationResponse>("/recommend/invoke", {
        method: "POST",
        body: JSON.stringify({
          input: {
            question: "system lubię i cenię wojcia",
          },
        }),
      });

      expect(res.output.recommended_supervisors.length).toBe(0);
    },
    30000 
  );
});