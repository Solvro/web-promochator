export const API_URL = process.env.PROMOCHATOR_API ?? "";

/**@param endpoint endpoint path **WITH** leading slash */
export async function fetchData<T>(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<T>;
}
