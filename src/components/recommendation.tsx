import { useQuery } from "@tanstack/react-query";
import { CircleX, LoaderPinwheel } from "lucide-react";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

import { useLastRequestTimestamp } from "@/hooks/use-last-request-timestamp";
import { useLockDuration } from "@/hooks/use-lock-duration";
import type { RecommendationResponse } from "@/types/api-types";
import type { Chat } from "@/types/chat";
import type { Supervisor as ISupervisor } from "@/types/supervisor";

import { PromochatorIcon } from "./chat";
import { Supervisor } from "./supervisor";
import { Accordion } from "./ui/accordion";

function useRecommendationQuery(
  chat: Chat,
  updateChat: (uuid: string, _chat: Partial<Chat>) => void,
  isLocked: boolean,
  setLastRequestTimestamp: (date: Date) => void,
) {
  return useQuery({
    queryKey: [
      "recommendation",
      chat.uuid,
      chat.prompt,
      chat.faculty,
      isLocked,
    ],
    queryFn: async () => {
      setLastRequestTimestamp(new Date());
      const response = await fetch("/api/recommend", {
        method: "POST",
        body: JSON.stringify({
          input: { question: chat.prompt, faculty: chat.faculty },
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch recommendation", {
          cause: response.status,
        });
      }
      const data = (await response.json()) as RecommendationResponse;
      const supervisorsWithUuid = data.output.recommended_supervisors.map(
        (s) => {
          return { ...s, uuid: v4() } as ISupervisor;
        },
      );
      updateChat(chat.uuid, {
        helloMessage: data.output.hello_message,
        supervisors: supervisorsWithUuid,
      });
      return data;
    },
    enabled: chat.helloMessage === undefined && !isLocked,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function Recommendation({
  chat,
  updateChat,
}: {
  chat: Chat;
  updateChat: (uuid: string, _chat: Partial<Chat>) => void;
}) {
  const { lockDuration, isLocked } = useLockDuration();
  const { setLastRequestTimestamp } = useLastRequestTimestamp();

  const { isLoading, error } = useRecommendationQuery(
    chat,
    updateChat,
    isLocked,
    setLastRequestTimestamp,
  );
  const [loadingMessage, setLoadingMessage] =
    useState<string>(getRandomMessage());

  useEffect(() => {
    const timeoutDuration =
      (loadingMessage.split(" ").length / (100 / 60)) * 1000; //average reader WPM - 238
    const timeout = setTimeout(() => {
      setLoadingMessage(getRandomMessage());
    }, timeoutDuration);

    if (!isLoading) {
      clearTimeout(timeout);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading, loadingMessage]);

  return (
    <div className="w-full max-w-4xl space-y-4 p-8">
      {isLoading ? (
        <div className="flex items-center gap-x-4">
          <PromochatorIcon
            imageWidth={40}
            imageHeight={40}
            imageClassName="py-2 px-1"
          />

          <LoaderPinwheel
            className="animate-spin"
            style={{
              animation: "spin 3s linear infinite",
            }}
            size={24}
          />
          <span className="w-full">{loadingMessage}</span>
        </div>
      ) : //eslint-disable-next-line unicorn/no-negated-condition
      error !== null ? (
        <div className="flex gap-x-4 text-red-300">
          <CircleX size={32}></CircleX>
          <span className="w-4/5">
            Wystąpił błąd przy pobieraniu rekomendacji.
            <br />
            Spróbuj ponownie później. Treść błędu:
            <br />
            <span className="text-sm">{error.message}</span>
          </span>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <PromochatorIcon
              imageWidth={40}
              imageHeight={40}
              imageClassName="py-2 px-1"
            />
            <p className="rounded-2xl bg-chat-bot px-4 py-3">
              {isLocked && chat.helloMessage === undefined
                ? `Pobieranie rekomendacji zostało anulowane. Ponowne pobranie za ${lockDuration.toString()}`
                : chat.helloMessage}
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {chat.supervisors?.map((supervisor) => (
              <Supervisor
                key={supervisor.uuid}
                supervisor={supervisor}
                chatUuid={chat.uuid}
                prompt={chat.prompt}
                promptFaculty={chat.faculty}
              />
            ))}
          </Accordion>
        </>
      )}
    </div>
  );
}

const loadingMessages = [
  "Przeglądam bazę promotorów szybciej niż studenci dysk przed sesją...",
  "Obliczam prawdopodobieństwo dostępności promotora z dokładnością do trzeciego miejsca po przecinku...",
  "Szukam promotora tak intensywnie, jak student wolnego miejsca na parkingu uczelni...",
  "Wykonuję całkowanie po zbiorze promotorów. Może zająć tyle co wykład z analizy...",
  "Optymalizuję wybór promotora metodą najmniejszych studentów...",
  "Przetwarzam dane szybciej niż student biegnący na ostatni pociąg...",
  "Przeprowadzam transformatę Fouriera na liście promotorów. Może potrwać tyle co kompilacja Javy...",
  "Pracuję ciężej niż student na dzień przed deadlinem...",
  "Szukam idealnego promotora jak student działającego długopisu podczas kolokwium...",
  "Wykonuję obliczenia kwantowe na procesorze studenckim zasilanym kawą...",
  "Przeprowadzam symulację Monte Carlo twojej przyszłej współpracy z promotorem...",
  "Obliczam gradient zainteresowań naukowych z krokiem uczenia się równym liczbie kawy w dziekanacie...",
  "Generuję odpowiedź szybciej niż student wymówki o niedziałającym internecie...",
  "Wykonuję zapytanie rekurencyjne do bazy wiedzy. Głębokość rekurencji: piwo^3...",
  "Implementuję algorytm genetyczny krzyżujący najlepsze cechy promotorów...",
  "Buduję sieć neuronową do klasyfikacji promotorów. Warstwa ukryta: prokrastynacja...",
  "Przeprowadzam redukcję wymiarów macierzy promotorów metodą PCA (Promotor Component Analysis)...",
  "Optymalizuję funkcję celu: minimalizacja liczby poprawek w pracy dyplomowej...",
  "Wykonuję normalizację danych według skali studenckich ambicji...",
  "Uruchamiam procedurę znajdowania promotora metodą prób i błędów (głównie błędów)...",
  "Przetwarzam dane w czasie rzeczywistym (czyli wolniej niż internet w akademiku)...",
  "Przetwarzam dane szybciej niż schodzi piwo na juwenaliach...",
  "Pracuję nad tym ciężej niż nad usprawiedliwieniem nieobecności na laborce...",
  "Kalkuluję prawdopodobieństwo znalezienia promotora, który nie sprawdza cytowań...",
  "Ładowanie trwa dłużej niż trzeźwienie przed egzaminem...",
  "Wyszukuję promotora, który nie będzie pytał o postępy co tydzień...",
  "Optymalizuję czas odpowiedzi jak student optymalizuje liczbę nieobecności...",
  "Analizuję dane tak dokładnie jak prowadzący sprawdza obecność na wykładzie...",
  "System myśli tak trzeźwo jak student w piątkowy wieczór...",
];
function getRandomMessage() {
  return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
}
