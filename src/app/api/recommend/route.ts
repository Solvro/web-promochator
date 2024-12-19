import { NextResponse } from "next/server";

import { fetchData } from "@/lib/api";
import type { ApiRequest } from "@/types/api-types";

export async function POST(request: Request) {
  const body = (await request.json()) as ApiRequest;

  const data = await fetchData("/recommend/invoke", {
    body: JSON.stringify(body),
    method: "POST",
  });

  return NextResponse.json(data);
}
