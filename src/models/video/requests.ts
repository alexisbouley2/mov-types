import { z } from "zod";

// ============================================================================
// VIDEO API REQUEST SCHEMAS - Used for HTTP request validation
// ============================================================================

// Confirm Upload request schema
export const ConfirmUploadRequestSchema = z.object({
  videoPath: z.string().min(1, "videoPath is required"),
  thumbnailPath: z.string().min(1, "thumbnailPath is required"),
  userId: z.string().uuid("userId must be a valid UUID"),
});

// Associate Events request schema
export const AssociateEventsRequestSchema = z.object({
  fileName: z.string().min(1, "fileName is required"),
  userId: z.string().uuid("userId must be a valid UUID"),
  eventIds: z
    .array(z.string().uuid("eventIds must be valid UUIDs"))
    .min(1, "At least one eventId is required"),
});

// Delete Video request schema
export const DeleteVideoRequestSchema = z.object({
  fileName: z.string().min(1, "fileName is required"),
  userId: z.string().uuid("userId must be a valid UUID"),
});

// Report Video request schema
export const ReportVideoRequestSchema = z.object({
  videoId: z.string().uuid("videoId must be a valid UUID"),
  userId: z.string().uuid("userId must be a valid UUID"),
  eventId: z.string().uuid("eventId must be a valid UUID"),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type ConfirmUploadRequest = z.infer<typeof ConfirmUploadRequestSchema>;
export type AssociateEventsRequest = z.infer<
  typeof AssociateEventsRequestSchema
>;
export type DeleteVideoRequest = z.infer<typeof DeleteVideoRequestSchema>;
export type ReportVideoRequest = z.infer<typeof ReportVideoRequestSchema>;
