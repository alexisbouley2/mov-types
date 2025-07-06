import { z } from "zod";

// Base User schema - represents the complete user entity
export const UserSchema = z.object({
  id: z.string().uuid(),
  phone: z.string().nullable(),
  username: z.string().min(1),
  profileImagePath: z.string().nullable(),
  profileThumbnailPath: z.string().nullable(),
  profileImageUrl: z.string().nullable(),
  profileThumbnailUrl: z.string().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
});

// Inferred types from schemas
export type User = z.infer<typeof UserSchema>;
