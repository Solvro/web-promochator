"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const API_KEY = "042a7e0f-fce9-48d3-8416-21ddbf12c242";
// const MAX_FILE_SIZE_BYTES = 2 * 1024 * 1024;
// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

const formSchema = z.object({
  email: z.string().email("Nieprawidłowy email"),
  description: z
    .string()
    .max(200, "Opis może zawierać co najwyżej 200 znaków")
    .nonempty("Opis nie może być pusty!"),
  stepsToReproduce: z
    .string()
    .max(1000, "Tekst może zawierać co najwyżej 1000 znaków"),
  //   screenshot: z
  //     .any()
  //     .refine(
  //       (file: File) => file.size <= MAX_FILE_SIZE_BYTES,
  //       "Maksymalana wielkość pliku wynosi 2MB",
  //     )
  //     .refine(
  //       (file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type),
  //       "Tylko formaty .jpg, .jpeg, .png, .webp są dozwolone",
  //     )
  //     .optional(),
});

export function BugReportForm() {
  const { toast } = useToast();
  const {
    handleSubmit,
    getValues,
    register,
    formState: { isSubmitting, errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async () => {
    const { email, description, stepsToReproduce } = getValues();
    // const response = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({
    //     email,
    //     subject: "BUG REPORT",
    //     access_key: API_KEY,
    //     Description: description,
    //     "Steps to reproduce": stepsToReproduce,
    //   }),
    // });
    if (false) {
      toast({ title: "Dziękujemy za zgłoszenie :)", variant: "default" });
    } else {
      toast({ title: "Ups, coś poszło nie tak.", variant: "destructive" });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <label htmlFor="email">Email</label>
      <Input {...register("email")} />
      <p className="text-red-300">{errors.email?.message}</p>
      <label htmlFor="description">Opis</label>
      <Textarea {...register("description")} className="min-h-24"></Textarea>
      <p className="text-red-300">{errors.description?.message}</p>
      <label htmlFor="stepsToReproduce">
        Kroki umożliwiające odtworzenie problemu
      </label>
      <Textarea
        {...register("stepsToReproduce")}
        className="min-h-36"
      ></Textarea>
      <p className="text-red-300">{errors.stepsToReproduce?.message}</p>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-fit self-end bg-color-primary"
      >
        Zgłoś błąd
      </Button>
    </form>
  );
}
