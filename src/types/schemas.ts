import { z } from "zod";

export const BugReportFormSchema = z.object({
  email: z.string().email("Nieprawidłowy email"),
  description: z
    .string()
    .max(200, "Opis może zawierać co najwyżej 200 znaków")
    .nonempty("Opis nie może być pusty!"),
  stepsToReproduce: z
    .string()
    .max(1000, "Tekst może zawierać co najwyżej 1000 znaków"),
  //TODO add screenshots
});
