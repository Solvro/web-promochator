import _mockResponse from "./mock-response.json";

interface MockResponse<T> {
  status: number;
  data: T;
}

const mockResponses: Record<string, MockResponse<unknown>> = {
  "/api/recommend": {
    data: _mockResponse,
    status: 200,
  },
};

export async function mockFetch(
  url: string,
  options: RequestInit = {},
): Promise<Response> {
  // Define your mock responses

  return new Promise((resolve) => {
    setTimeout(() => {
      const mockResponse = mockResponses[url];
      const response = {
        ok: mockResponse.status === 200,
        status: mockResponse.status,
        json: () => mockResponse.data,
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        ...options,
      } as Response;

      resolve(response);
    }, 1000);
  });
}
