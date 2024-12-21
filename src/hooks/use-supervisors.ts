import { useAtom } from "jotai";
import { useCallback } from "react";

import { supervisorsAtom } from "@/atoms/supervisors";
import type { SavedSupervisor } from "@/types/supervisor";

export function useSupervisors() {
  const [supervisors, setSupervisors] = useAtom(supervisorsAtom);

  const getSupervisor = useCallback(
    (uuid: string) => {
      return supervisors.find((s) => s.uuid === uuid) ?? null;
    },
    [supervisors],
  );

  const addSupervisor = useCallback(
    (supervisor: SavedSupervisor) => {
      setSupervisors((previousSupervisors) => [
        ...previousSupervisors,
        supervisor,
      ]);
    },
    [setSupervisors],
  );

  const removeSupervisor = useCallback(
    (uuid: string) => {
      setSupervisors((previousSupervisors) =>
        previousSupervisors.filter((s) => s.uuid !== uuid),
      );
    },
    [setSupervisors],
  );

  return { supervisors, getSupervisor, addSupervisor, removeSupervisor };
}
