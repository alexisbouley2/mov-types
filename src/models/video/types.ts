import { z } from "zod";

// Base Video schema - represents the complete video entity
export const VideoSchema = z.object({
  id: z.string().uuid(),
  videoPath: z.string(),
  thumbnailPath: z.string(),
  createdAt: z.coerce.date(),
  userId: z.string().uuid(),
  status: z.string(),
});

// Video with URLs schema (for responses)
export const VideoWithUrlsSchema = z.object({
  id: z.string().uuid(),
  videoPath: z.string(),
  thumbnailPath: z.string(),
  videoUrl: z.string().url(),
  thumbnailUrl: z.string().url(),
  createdAt: z.coerce.date(),
  user: z.object({
    id: z.string().uuid(),
    username: z.string(),
    profileThumbnailPath: z.string().nullable(),
    profileThumbnailUrl: z.string().nullable(),
  }),
});

// Video with user info schema
export const VideoWithUserSchema = z.object({
  id: z.string().uuid(),
  videoPath: z.string(),
  thumbnailPath: z.string(),
  createdAt: z.coerce.date(),
  userId: z.string().uuid(),
  status: z.string(),
  user: z.object({
    id: z.string().uuid(),
    username: z.string(),
    profileThumbnailPath: z.string().nullable(),
  }),
});

// Video feed options schema
export const VideoFeedOptionsSchema = z.object({
  cursor: z.string().optional(),
  limit: z.number(),
  userId: z.string().optional(),
});

// Inferred types from schemas
export type Video = z.infer<typeof VideoSchema>;
export type VideoWithUrls = z.infer<typeof VideoWithUrlsSchema>;
export type VideoFeedOptions = z.infer<typeof VideoFeedOptionsSchema>;
export type VideoWithUser = z.infer<typeof VideoWithUserSchema>;
