import { z } from "zod";

// ============================================================================
// USER API REQUEST SCHEMAS - Used for HTTP request validation
// ============================================================================

// Create User request schema
export const CreateUserRequestSchema = z.object({
  phone: z.string().optional(),
  username: z.string().min(1, "Username is required"),
  profileImagePath: z.string().optional(),
  profileThumbnailPath: z.string().optional(),
});

// Update User request schema
export const UpdateUserRequestSchema = z.object({
  phone: z.string().optional(),
  username: z.string().min(1, "Username is required").optional(),
  profileImagePath: z.string().optional(),
  profileThumbnailPath: z.string().optional(),
});

// Get User request schema (for path parameters)
export const GetUserRequestSchema = z.object({
  id: z.string().uuid("Invalid user ID"),
});

// Delete User request schema (for path parameters)
export const DeleteUserRequestSchema = z.object({
  id: z.string().uuid("Invalid user ID"),
});

// Get Users request schema (for query parameters)
export const GetUsersRequestSchema = z.object({
  limit: z.number().min(1).max(100).optional().default(20),
  offset: z.number().min(0).optional().default(0),
  search: z.string().optional(),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;
export type UpdateUserRequest = z.infer<typeof UpdateUserRequestSchema>;
export type GetUserRequest = z.infer<typeof GetUserRequestSchema>;
export type DeleteUserRequest = z.infer<typeof DeleteUserRequestSchema>;
export type GetUsersRequest = z.infer<typeof GetUsersRequestSchema>;
