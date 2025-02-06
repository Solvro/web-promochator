import { NextResponse } from "next/server";

import { fetchData } from "@/lib/api";
import type { Feedback } from "@/types/api-types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Feedback;

    if (process.env.NODE_ENV === "development") {
      return NextResponse.json(null, { status: 201 });
    }

    await fetchData("/recommend/feedback", {
      body: JSON.stringify(body),
      method: "POST",
    });
  } catch (error) {
    console.error("Error occured when sending recommendation feedback", error);
    return NextResponse.json(null, { status: 500 });
  }
  return NextResponse.json(null, { status: 201 });
}
