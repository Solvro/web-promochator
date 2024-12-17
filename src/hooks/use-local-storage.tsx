import { useCallback, useEffect, useState } from "react";

export function useLocalStorageState<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((value_: T) => T)) => void] {
  const readStorageValue = useCallback((): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item == null ? initialValue : (JSON.parse(item) as T);
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState<T>(readStorageValue);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  }, [key, storedValue]);

  // Custom setter that updates both state and localStorage
  const setValue = useCallback(
    (value: T | ((value_: T) => T)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);
      } catch (error) {
        console.error("Error setting value:", error);
      }
    },
    [storedValue],
  );

  // Listen to storage events to sync across tabs/windows
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        try {
          const newValue = JSON.parse(event.newValue ?? "null") as T;
          setStoredValue(newValue);
        } catch (error) {
          console.error("Error parsing storage event value:", error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}
