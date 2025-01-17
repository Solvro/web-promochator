import { useEffect, useState } from "react";

import { useLastRequestTimestamp } from "@/hooks/use-last-request-timestamp";

const LOCK_DURATION_SECONDS = Number(
  process.env.NEXT_PUBLIC_LOCK_DURATION_SECONDS ?? 60,
);

export function useLockDuration() {
  const { lastRequestTimestamp } = useLastRequestTimestamp();
  const [lockDuration, setLockDuration] = useState(() => {
    const timestamp = lastRequestTimestamp;
    if (timestamp === null) {
      return 0;
    }
    const delta = Math.floor((Date.now() - timestamp.getTime()) / 1000);
    const newLockDuration = LOCK_DURATION_SECONDS - delta;
    return Math.max(newLockDuration, 0);
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLockDuration((previousLockDuration) => {
        if (previousLockDuration <= 0) {
          clearTimeout(timeout);
          return 0;
        }
        return previousLockDuration - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [lockDuration]);

  const isLocked = lockDuration > 0;
  return { lockDuration, isLocked };
}
