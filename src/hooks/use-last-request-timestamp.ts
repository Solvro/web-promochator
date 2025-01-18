import { useAtom } from "jotai";
import { useCallback, useMemo } from "react";

import { lastRequestTimestampAtom } from "@/atoms/last-request";

export function useLastRequestTimestamp() {
  const [lastRequestTimestampStorage, setLastRequestTimestampStorage] = useAtom(
    lastRequestTimestampAtom,
  );

  const lastRequestTimestamp = useMemo(() => {
    return lastRequestTimestampStorage === null
      ? null
      : new Date(lastRequestTimestampStorage);
  }, [lastRequestTimestampStorage]);

  const setLastRequestTimestamp = useCallback(
    (date: Date) => {
      setLastRequestTimestampStorage(date.toISOString());
    },
    [setLastRequestTimestampStorage],
  );

  return {
    lastRequestTimestamp,
    setLastRequestTimestamp,
  };
}
