import { z } from "zod";
import { MessageSchema } from "./types";

// Event messages response schema
export const EventMessagesResponseSchema = z.object({
  messages: z.array(MessageSchema),
  hasMore: z.boolean(),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type EventMessagesResponse = z.infer<typeof EventMessagesResponseSchema>;
