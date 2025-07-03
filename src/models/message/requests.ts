import { z } from "zod";

// ============================================================================
// MESSAGE API REQUEST SCHEMAS - Used for HTTP request validation
// ============================================================================

// Send Message request schema
export const SendMessageRequestSchema = z.object({
  content: z.string().min(1, "Message content is required"),
  type: z.string().optional(),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type SendMessageRequest = z.infer<typeof SendMessageRequestSchema>;
