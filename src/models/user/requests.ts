import { z } from "zod";

// ============================================================================
// USER API REQUEST SCHEMAS - Used for HTTP request validation
// ============================================================================

// Update User request schema
export const UpdateUserRequestSchema = z.object({
  phone: z.string().optional(),
  username: z.string().min(1, "Username is required").optional(),
  profileImagePath: z.string().optional(),
  profileThumbnailPath: z.string().optional(),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type UpdateUserRequest = z.infer<typeof UpdateUserRequestSchema>;
