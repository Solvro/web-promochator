import { useQuery } from "@tanstack/react-query";
import { CircleX, LoaderPinwheel } from "lucide-react";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

import { mockFetch } from "@/lib/mock-fetch";
import type { RecommendationResponse } from "@/types/api-types";
import type { Chat } from "@/types/chat";
import type { Supervisor as ISupervisor } from "@/types/supervisor";

import { PromochatorIcon } from "./chat";
import { Supervisor } from "./supervisor";

function useRecommendationQuery(
  chat: Chat,
  updateChat: (uuid: string, _chat: Partial<Chat>) => void,
) {
  return useQuery({
    queryKey: ["recommendation", chat.uuid],
    queryFn: async () => {
      const response = await mockFetch("/api/recommend");
      // const response = await fetch("/api/recommend", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     input: { question: chat.prompt, faculty: "" },
      //   }),
      // });

      const data = (await response.json()) as RecommendationResponse;
      const supervisorsWithUuid =
        data.recommendation.recommended_supervisors.map((s) => {
          return { ...s, uuid: v4() } as ISupervisor;
        });
      updateChat(chat.uuid, {
        helloMessage: data.recommendation.hello_message,
        supervisors: supervisorsWithUuid,
      });
      return data;
    },
    enabled: chat.helloMessage === undefined,
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
  const { isLoading, error } = useRecommendationQuery(chat, updateChat);
  const [loadingMessage, setLoadingMessage] =
    useState<string>(getRandomMessage());

  useEffect(() => {
    const intervalDuration =
      (loadingMessage.split(" ").length / (100 / 60)) * 1000; //average reader WPM - 238
    const interval = setInterval(() => {
      setLoadingMessage(getRandomMessage());
    }, intervalDuration);

    if (!isLoading) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isLoading, loadingMessage]);

  return (
    <div className="w-full max-w-7xl space-y-4 p-8">
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
            Spróbuj ponownie później.
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
            <p className="rounded-2xl bg-message-primary px-4 py-3">
              {chat.helloMessage}
            </p>
          </div>
          {chat.supervisors?.map((supervisor) => (
            <Supervisor
              key={supervisor.uuid}
              supervisor={supervisor}
              prompt={chat.prompt}
              chatUuid={chat.uuid}
            />
          ))}
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
