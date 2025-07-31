import { z } from "zod";
import { MediaEntityTypeSchema } from "./types";

// ============================================================================
// MEDIA API REQUEST SCHEMAS - Used for HTTP request validation
// ============================================================================

// Get Upload URLs request schema
export const GetUploadUrlsRequestSchema = z.object({
  userId: z.string().min(1, "userId is required"),
  entityType: MediaEntityTypeSchema,
});

// Delete Media request schema
export const DeleteMediaRequestSchema = z.object({
  fileNames: z.array(z.string().min(1, "fileName is required")),
  userId: z.string().uuid("userId must be a valid UUID"),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type GetUploadUrlsRequest = z.infer<typeof GetUploadUrlsRequestSchema>;
export type DeleteMediaRequest = z.infer<typeof DeleteMediaRequestSchema>;
