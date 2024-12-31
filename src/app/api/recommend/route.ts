import { NextResponse } from "next/server";

import { fetchData } from "@/lib/api";
import type {
  RecommendationRequest,
  RecommendationResponse,
} from "@/types/api-types";

export async function POST(request: Request) {
  const body = (await request.json()) as RecommendationRequest;

  const data = await fetchData<RecommendationResponse>("/recommend/invoke", {
    body: JSON.stringify(body),
    method: "POST",
  });

  return NextResponse.json(data);
}
