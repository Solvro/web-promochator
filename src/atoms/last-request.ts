import { atomWithStorage } from "jotai/utils";

export const lastRequestTimestampAtom = atomWithStorage<string | null>(
  "lastRequestTimestamp",
  null,
  undefined,
  {
    getOnInit: true,
  },
);
