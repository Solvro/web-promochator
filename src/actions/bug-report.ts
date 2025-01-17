"use server";

import type { z } from "zod";

import type { BugReportFormSchema } from "@/types/schemas";

export async function sendBugReportForm(
  values: z.infer<typeof BugReportFormSchema>,
) {
  try {
    const googleFormUrl = process.env.BUG_REPORT_FORM_URL ?? "";

    const formData = new URLSearchParams();
    formData.append(process.env.BUG_REPORT_FORM_EMAIL ?? "", values.email);
    formData.append(
      process.env.BUG_REPORT_FORM_DESCRIPTION ?? "",
      values.description,
    );
    formData.append(
      process.env.BUG_REPORT_FORM_STEP ?? "",
      values.stepsToReproduce,
    );

    const response = await fetch(googleFormUrl, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      const error = {
        message: `Bug report submission failed`,
      };
      console.error(error.message, response);
      return { success: false, error };
    }
  } catch (error) {
    console.error("Bug report submission failed:", error);
  }
  return { success: true };
}
