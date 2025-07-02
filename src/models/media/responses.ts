import { z } from "zod";
import { MediaUploadTypeSchema } from "./types";

// ============================================================================
// MEDIA API RESPONSE SCHEMAS - Used for HTTP response validation
// ============================================================================

// Upload URL response schema
export const UploadUrlResponseSchema = z.object({
  uploadUrl: z.string().url(),
  fileName: z.string(),
  type: MediaUploadTypeSchema,
});

// Get Upload URLs response schema
export const GetUploadUrlsResponseSchema = z.object({
  urls: z.array(UploadUrlResponseSchema),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type UploadUrlResponse = z.infer<typeof UploadUrlResponseSchema>;
export type GetUploadUrlsResponse = z.infer<typeof GetUploadUrlsResponseSchema>;
