interface Paper {
  title: string;
  descripiton: string;
}

interface Supervisor {
  name: string;
  faculty: string;
  papers: Paper[];
}

interface SavedSupervisor extends Supervisor {
  prompt: string;
  chatUuid: string;
}

export type { Paper, Supervisor, SavedSupervisor };