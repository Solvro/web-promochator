import { useAtom } from "jotai";
import { useCallback } from "react";

import { supervisorsAtom } from "@/atoms/supervisors";
import type { SavedSupervisor } from "@/types/supervisor";

export function useSupervisors() {
  const [supervisors, setSupervsiors] = useAtom(supervisorsAtom);

  const getSupervisor = useCallback(
    (uuid: string) => {
      return supervisors.find((s) => s.uuid === uuid) ?? null;
    },
    [supervisors],
  );

  const addSupervisor = useCallback(
    (supervisor: SavedSupervisor) => {
      setSupervsiors((previousSupervisors) => [
        ...previousSupervisors,
        supervisor,
      ]);
    },
    [setSupervsiors],
  );

  const removeSupervisor = useCallback(
    (uuid: string) => {
      setSupervsiors((previousSupervisors) =>
        previousSupervisors.filter((s) => s.uuid !== uuid),
      );
    },
    [setSupervsiors],
  );

  return { supervisors, getSupervisor, addSupervisor, removeSupervisor };
}
