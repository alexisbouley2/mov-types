import { z } from "zod";

// Helper function to preprocess string dates to Date objects
export const preprocessDate = (val: unknown) => {
  if (typeof val === "string") {
    return new Date(val);
  }
  return val;
};

// Zod schema for date fields that automatically converts strings to Date objects
export const dateSchema = z.preprocess(preprocessDate, z.date());
