import { z } from "zod";
import { UserSchema, UserContactSchema } from "./types";

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

export const CheckContactsResponseSchema = z.object({
  success: z.boolean(),
  contacts: z.array(UserContactSchema),
  message: z.string(),
});

export type UpdateUserResponse = z.infer<typeof UpdateUserResponseSchema>;
export type DeleteUserResponse = z.infer<typeof DeleteUserResponseSchema>;
export type CheckContactsResponse = z.infer<typeof CheckContactsResponseSchema>;
