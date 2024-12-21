import { atomWithStorage } from "jotai/utils";

import type { SavedSupervisor } from "@/types/supervisor";

export const supervisorsAtom = atomWithStorage<SavedSupervisor[]>(
  "supervisors",
  [],
);
