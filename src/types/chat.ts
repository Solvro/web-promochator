import type { Supervisor } from "./supervisor";

export interface Chat {
  uuid: string;
  prompt: string;
  faculty?: string;
  helloMessage?: string;
  supervisors?: Supervisor[];
  createdAt: Date;
}
