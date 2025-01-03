import { useAtom } from "jotai";
import { useCallback } from "react";

import { lastRequestTimestampAtom } from "@/atoms/last-request";

export function useLastRequestTimestamp() {
  const [lastRequestTimestamp, setLastRequestTimestampStorage] = useAtom(
    lastRequestTimestampAtom,
  );

  const getLastRequestTimestamp = useCallback(() => {
    return lastRequestTimestamp === null
      ? null
      : new Date(lastRequestTimestamp);
  }, [lastRequestTimestamp]);

  const setLastRequestTimestamp = useCallback(
    (date: Date) => {
      setLastRequestTimestampStorage(date.toISOString());
    },
    [setLastRequestTimestampStorage],
  );

  return { getLastRequestTimestamp, setLastRequestTimestamp };
}
