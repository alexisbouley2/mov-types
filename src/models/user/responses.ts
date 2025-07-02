import { z } from "zod";
import { UserSchema } from "./types";

// Update User response schema
export const UpdateUserResponseSchema = z.object({
  success: z.boolean(),
  user: UserSchema,
  message: z.string().optional(),
});

// Delete User response schema
export const DeleteUserResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

// Inferred types from schemas
export type UpdateUserResponse = z.infer<typeof UpdateUserResponseSchema>;
export type DeleteUserResponse = z.infer<typeof DeleteUserResponseSchema>;
