interface Paper {
  title: string;
  description: string;
}

interface SupervisorResponse {
  name: string;
  faculty: string;
  papers: Paper[];
}

interface Supervisor extends SupervisorResponse {
  uuid: string;
}

interface SavedSupervisor extends Supervisor {
  prompt: string;
  chatUuid: string;
  createdAt: Date;
}

export type { Paper, SupervisorResponse, Supervisor, SavedSupervisor };
