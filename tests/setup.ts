import "@testing-library/jest-dom";
import { vi } from "vitest";

process.env.PROMOCHATOR_API = "http://localhost:8000";

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual<any>("next/navigation");
  return {
    ...actual,
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn(),
      refresh: vi.fn(),
      prefetch: vi.fn(),
    }),
  };
});