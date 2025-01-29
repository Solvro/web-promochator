import { NextResponse } from "next/server";

import { fetchData } from "@/lib/api";
import { mockFetch } from "@/lib/mock-fetch";
import type {
  RecommendationRequest,
  RecommendationResponse,
} from "@/types/api-types";

export async function POST(request: Request) {
  const body = (await request.json()) as RecommendationRequest;
  const clientIp = request.headers.get("X-Forwarded-For")?.split(",")[0];

  // eslint-disable-next-line no-console
  console.log(`Client IP = ${clientIp ?? "Unknown"}`);
  if (process.env.NODE_ENV === "development") {
    const response = await mockFetch("/recommend/invoke");
    return NextResponse.json(await response.json());
  }

  const data = await fetchData<RecommendationResponse>("/recommend/invoke", {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      "X-Forwarded-For": clientIp ?? "",
    },
  });

  return NextResponse.json(data);
}
