import { NextResponse } from "next/server";

import { fetchData } from "@/lib/api";
import { mockFetch } from "@/lib/mock-fetch";
import type {
  RecommendationRequest,
  RecommendationResponse,
} from "@/types/api-types";

export async function POST(request: Request) {
  const body = (await request.json()) as RecommendationRequest;

  if (process.env.NODE_ENV === "development") {
    const response = await mockFetch("/api/recommend");
    return NextResponse.json(await response.json());
  }

  const data = await fetchData<RecommendationResponse>("/recommend/invoke", {
    body: JSON.stringify(body),
    method: "POST",
  });

  return NextResponse.json(data);
}
