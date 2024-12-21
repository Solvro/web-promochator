import type { Supervisor } from "./supervisor";

export interface Chat {
  uuid: string;
  prompt: string;
  helloMessage?: string;
  supervisors?: Supervisor[];
}
