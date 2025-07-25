import { describe, it, expect } from "vitest";
import { fetchData } from "@/lib/api";
import type { RecommendationResponse } from "@/types/api-types";

describe("fetchData - real /recommend/invoke integration test", () => {
  it(
    "returns Artur Wymysłowski for trash sorting system",
    async () => {
      const res = await fetchData<RecommendationResponse>("/recommend/invoke", {
        method: "POST",
        body: JSON.stringify({
          input: {
            question: "System automatycznej segregacji śmieci przy użyciu kamery z Raspberry Pi",
          },
        }),
      });

      expect(
        res.output.recommended_supervisors.map((s) => s.name).join(" ")
      ).toContain("Lewandowski");
    },
    30000
  );

  it(
    "returns Łukasz Nowak for acoustic analysis",
    async () => {
      const res = await fetchData<RecommendationResponse>("/recommend/invoke", {
        method: "POST",
        body: JSON.stringify({
          input: {
            question: "Analiza akustyczna wpływu materiałów wykończeniowych na redukcję hałasu w budownictwie mieszkaniowym",
          },
        }),
      });

      expect(
        res.output.recommended_supervisors.map((s) => s.name).join(" ")
      ).toContain("Łukasz Nowak");
    },
    30000
  );

  it(
    "returns Igor Gisterek for urban transport",
    async () => {
      const res = await fetchData<RecommendationResponse>("/recommend/invoke", {
        method: "POST",
        body: JSON.stringify({
          input: {
            question: "Optymalizacja transportu miejskiego z wykorzystaniem danych GPS i teorii kolejek",
          },
        }),
      });

      expect(
        res.output.recommended_supervisors.map((s) => s.name).join(" ")
      ).toContain("Gisterek");
    },
    30000
  );
});