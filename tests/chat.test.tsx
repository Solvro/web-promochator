import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import { Chat } from "@/components/chat";
import { useLockDuration } from "@/hooks/use-lock-duration";

window.Element.prototype.hasPointerCapture = () => false;
window.Element.prototype.releasePointerCapture = () => {};
window.Element.prototype.scrollIntoView = () => {};


const mockPush = vi.fn();
const mockAddChat = vi.fn();

vi.mock("@/hooks/use-chats", () => ({
  useChats: () => ({ addChat: mockAddChat }),
}));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));
vi.mock("uuid", () => ({
  v4: () => "mock-uuid-1234",
}));
vi.mock("@/hooks/use-lock-duration");
vi.mock("@/lib/faculties", () => ({
  faculties: {
    W04: "Wydział Informatyki i Telekomunikacji",
    W08: "Wydział Zarządzania",
  },
}));
vi.mock("@tiptap/react", () => ({
  EditorProvider: ({ onUpdate, editorProps }: any) => (
    <textarea
      data-testid={editorProps?.attributes["data-testid"]}
      onChange={e =>
        onUpdate && onUpdate({ editor: { getText: () => e.target.value } })
      }
    />
  ),
}));

describe("Chat Component with PromptForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useLockDuration).mockReturnValue({ isLocked: false, lockDuration: 0 });
  });

  it("should correctrly preprocess data and return a supervisor", async () => {
    const user = userEvent.setup();
    mockAddChat.mockResolvedValue(undefined);
    render(<Chat />);

    await user.type(screen.getByTestId("prompt-editor"), "Analiza jakościowa sygnału w urządzeniach GMS");

    await user.click(screen.getByRole("combobox"));
    await user.click(await screen.findByRole("option", { name: /Wydział Informatyki i Telekomunikacji/i }));

    await user.click(screen.getByRole("button", { name: /wyślij/i }));

    await waitFor(() => {
      expect(mockAddChat).toHaveBeenCalledWith({
        uuid: "mock-uuid-1234",
        prompt: "Analiza jakościowa sygnału w urządzeniach GMS",
        faculty: "W04",
        createdAt: expect.any(Date),
      });
      expect(mockPush).toHaveBeenCalledWith("/chat/mock-uuid-1234");
    });
  });

  it("should return an error message in case of code 500", async () => {
    const user = userEvent.setup();
    mockAddChat.mockRejectedValueOnce(new Error("Błąd serwera"));
    render(<Chat />);

    await user.type(screen.getByTestId("prompt-editor"), "cokolwiek nie wpiszę to i tak będzie błąd");
    await user.click(screen.getByRole("button", { name: /wyślij/i }));

    const errorMessage = await screen.findByTestId("error-msg");
    expect(errorMessage).toHaveTextContent("błąd");
    expect(mockPush).not.toHaveBeenCalled();
  });

  it("should not send the prompt if the prompt field is empty", async () => {
    const user = userEvent.setup();
    render(<Chat />);

    const submitButton = screen.getByRole("button", { name: /wyślij/i });
    await user.click(submitButton);

    expect(mockAddChat).not.toHaveBeenCalled();
    expect(mockPush).not.toHaveBeenCalled();
  });

  it("should lock the button and show the timer if the counter is active", async () => {

    // i overwrote mock just in case
    vi.mocked(useLockDuration).mockReturnValue({ isLocked: true, lockDuration: 30 });
    
    render(<Chat />);

    const submitButton = screen.getByRole("button", { name: /wyślij/i });
    expect(submitButton).toBeDisabled();

    const timerText = screen.getByText("30");
    expect(timerText).toBeInTheDocument();
  });
});