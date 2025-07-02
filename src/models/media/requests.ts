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

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type GetUploadUrlsRequest = z.infer<typeof GetUploadUrlsRequestSchema>;
