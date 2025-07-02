import { z } from "zod";

// Base User schema - represents the complete user entity
export const UserSchema = z.object({
  id: z.string().uuid(),
  phone: z.string().optional(),
  username: z.string().min(1),
  profileImagePath: z.string().optional(),
  profileThumbnailPath: z.string().optional(),
  isDeleted: z.boolean().default(false),
  deletedAt: z.date().optional(),
});

// Inferred types from schemas
export type User = z.infer<typeof UserSchema>;
