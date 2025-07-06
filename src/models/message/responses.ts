import { z } from "zod";
import { MessageDetailsSchema, MessageSenderSchema } from "./types";

// Event messages response schema
export const EventMessagesResponseSchema = z.object({
  messages: z.array(MessageDetailsSchema),
  hasMore: z.boolean(),
  page: z.number(),
  total: z.number(),
  event: z.object({
    id: z.string().uuid(),
    name: z.string().nullable(),
  }),
});

// Message preview response schema
export const MessagePreviewResponseSchema = z.object({
  hasMessages: z.boolean(),
  messageCount: z.number(),
  lastMessage: z
    .object({
      content: z.string(),
      sender: MessageSenderSchema,
      createdAt: z.coerce.date(),
      type: z.string(),
    })
    .nullable(),
});

// Send Message response schema
export const SendMessageResponseSchema = MessageDetailsSchema;

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type EventMessagesResponse = z.infer<typeof EventMessagesResponseSchema>;
export type MessagePreviewResponse = z.infer<
  typeof MessagePreviewResponseSchema
>;
export type SendMessageResponse = z.infer<typeof SendMessageResponseSchema>;
