import { z } from "zod";
import { UserSchema } from "./types";

// Create User response schema
export const CreateUserResponseSchema = z.object({
  success: z.boolean(),
  user: UserSchema,
  message: z.string().optional(),
});

// Get User response schema
export const GetUserResponseSchema = z.object({
  user: UserSchema,
});

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

// Get Users response schema
export const GetUsersResponseSchema = z.object({
  users: z.array(UserSchema),
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
});

// Inferred types from schemas
export type CreateUserResponse = z.infer<typeof CreateUserResponseSchema>;
export type GetUserResponse = z.infer<typeof GetUserResponseSchema>;
export type UpdateUserResponse = z.infer<typeof UpdateUserResponseSchema>;
export type DeleteUserResponse = z.infer<typeof DeleteUserResponseSchema>;
export type GetUsersResponse = z.infer<typeof GetUsersResponseSchema>;
