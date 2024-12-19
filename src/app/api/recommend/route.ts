import { NextResponse } from "next/server";

import { fetchData } from "@/lib/api";
import type {
  RawApiRecommendation,
  RecommendationRequest,
  RecommendationResponse,
} from "@/types/api-types";

export async function POST(request: Request) {
  const body = (await request.json()) as RecommendationRequest;

  const data = await fetchData<RawApiRecommendation>("/recommend/invoke", {
    body: JSON.stringify(body),
    method: "POST",
  });

  const result: RecommendationResponse = {
    faculty: data.output.faculty,
    question: data.output.question,
    recommendation: data.output.recommendation,
  };
  return NextResponse.json(result);
}
