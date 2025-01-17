"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Bug, Check, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { sendBugReportForm } from "@/actions/bug-report";
import { BugReportFormSchema } from "@/types/schemas";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type DialogTriggerVariant = "icon" | "text";

export function BugReportForm({
  triggerVariant,
}: {
  triggerVariant: DialogTriggerVariant;
}) {
  const {
    handleSubmit,
    getValues,
    register,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof BugReportFormSchema>>({
    resolver: zodResolver(BugReportFormSchema),
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await sendBugReportForm(getValues());
      if (!response.success) {
        throw new Error(response.error?.message);
      }
    },
  });

  const onSubmit = () => {
    mutation.mutate();
  };

  const generateDialogContent = () => {
    if (mutation.isError) {
      return (
        <DialogContent className="m-4 w-4/5 bg-red-800 text-color-white">
          <DialogHeader>
            <DialogTitle>Ups coś poszło nie tak 😪</DialogTitle>
            <DialogDescription className="text-color-white">
              Spróbuj ponownie później.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      );
    }
    if (mutation.isSuccess) {
      return (
        <DialogContent className="m-4 w-4/5 bg-green-800 text-color-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-x-2">
              <span>Dziękujemy za zgłoszenie</span>{" "}
              <Check className="text-green-500"></Check>
            </DialogTitle>
            <DialogDescription className="text-color-white">
              Jeśli będzie potrzeba, skontaktujemy się z Tobą poprzez podanego
              maila.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      );
    }
    return (
      <DialogContent className="m-4 w-4/5 bg-chat-user text-color-white">
        <DialogHeader>
          <DialogTitle>Zgłoś błąd</DialogTitle>
          <DialogDescription className="text-color-white">
            Postaraj się jak najdokładniej opisać błąd, który napotkałeś
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2"
        >
          <div className="flex flex-col gap-y-0">
            <label htmlFor="email">Email</label>
            <p className="text-xs">
              Będzie nam potrzebny tylko do odpowiedzi zwrotnej{" "}
            </p>
          </div>
          <Input {...register("email")} />
          <p className="text-red-300">{errors.email?.message}</p>
          <label htmlFor="description">Opis</label>
          <Textarea
            {...register("description")}
            className="min-h-24"
          ></Textarea>
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
            disabled={mutation.isPending}
            className="w-fit self-end bg-color-primary"
          >
            Zgłoś błąd
            {mutation.isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : null}
          </Button>
        </form>
      </DialogContent>
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerVariant === "icon" ? (
          <Button
            size="icon"
            title="Zgłoś błąd"
            className="m-4 self-end bg-chat-user"
            onClick={() => {
              if (!mutation.isError) {
                //form reset
                reset();
              }
              mutation.reset();
            }}
          >
            <Bug></Bug>
          </Button>
        ) : (
          <Button
            variant="link"
            className="p-0 text-color-white"
            onClick={() => {
              if (!mutation.isError) {
                //form reset
                reset();
              }
              mutation.reset();
            }}
          >
            Zgłoś błąd
          </Button>
        )}
      </DialogTrigger>
      {generateDialogContent()}
    </Dialog>
  );
}
