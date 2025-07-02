import { z } from "zod";
import { VideoWithUrlsSchema, VideoWithUserSchema } from "./types";

// ============================================================================
// VIDEO API RESPONSE SCHEMAS - Used for HTTP response validation
// ============================================================================

// Video Feed Response schema (with success flag)
export const VideoFeedResponseSchema = z.object({
  videos: z.array(VideoWithUrlsSchema),
  nextCursor: z.string().nullable(),
  hasMore: z.boolean(),
});

// Confirm Upload Response schema
export const ConfirmUploadResponseSchema = z.object({
  success: z.boolean(),
  video: VideoWithUserSchema,
  message: z.string(),
});

// Associate Events Response schema
export const AssociateEventsResponseSchema = z.object({
  success: z.boolean(),
  video: VideoWithUserSchema.extend({
    events: z.array(
      z.object({
        id: z.string().uuid(),
        event: z.object({
          id: z.string().uuid(),
          name: z.string().nullable(),
        }),
      })
    ),
  }),
  message: z.string(),
});

// Delete Video Response schema
export const DeleteVideoResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type VideoFeedResponse = z.infer<typeof VideoFeedResponseSchema>;
export type ConfirmUploadResponse = z.infer<typeof ConfirmUploadResponseSchema>;
export type AssociateEventsResponse = z.infer<
  typeof AssociateEventsResponseSchema
>;
export type DeleteVideoResponse = z.infer<typeof DeleteVideoResponseSchema>;
