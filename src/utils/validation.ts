import { z } from "zod";

// Generic validation helper
export const validateSchema = <T>(schema: z.ZodSchema<T>, data: unknown): T => {
  return schema.parse(data);
};

// Safe validation helper (returns null if invalid)
export const safeValidateSchema = <T>(
  schema: z.ZodSchema<T>,
  data: unknown
): T | null => {
  const result = schema.safeParse(data);
  return result.success ? result.data : null;
};

// Validation helper that returns error details
export const validateSchemaWithErrors = <T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: z.ZodError } => {
  const result = schema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, errors: result.error };
};
