interface Paper {
  title: string;
  description: string;
}

interface Supervisor {
  uuid: string;
  name: string;
  faculty: string;
  papers: Paper[];
}

interface SavedSupervisor extends Supervisor {
  prompt: string;
  chatUuid: string;
}

export type { Paper, Supervisor, SavedSupervisor };
