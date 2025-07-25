import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { fetchData } from "@/lib/api";

const apiUrl = process.env.PROMOCHATOR_API ?? "http://localhost:3000";

// mocked api 500 response
const server = setupServer(
  http.post(`${apiUrl}/recommend/invoke`, () => {
    return new HttpResponse("Internal Server Error", {
      status: 500,
    });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("fetchData - API error handling", () => {
  it("throws error when backend responds with 500", async () => {
    await expect(() =>
      fetchData("/recommend/invoke", {
        method: "POST",
        body: JSON.stringify({ input: { question: "jeden kij co tu będzie, i tak ma zwrócić błąd xd" } }),
      }),
    ).rejects.toThrow("Internal Server Error");
  });
});