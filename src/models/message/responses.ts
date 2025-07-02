import { z } from "zod";
import { MessageSenderSchema } from "./types";

// Message details schema (with sender info)
export const MessageDetailsSchema = z.object({
  id: z.string().uuid(),
  content: z.string(),
  createdAt: z.date(),
  type: z.string(),
  sender: MessageSenderSchema,
});

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
      createdAt: z.date(),
      type: z.string(),
    })
    .nullable(),
});

// Send Message response schema
export const SendMessageResponseSchema = MessageDetailsSchema;

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type MessageDetails = z.infer<typeof MessageDetailsSchema>;
export type EventMessagesResponse = z.infer<typeof EventMessagesResponseSchema>;
export type MessagePreviewResponse = z.infer<
  typeof MessagePreviewResponseSchema
>;
export type SendMessageResponse = z.infer<typeof SendMessageResponseSchema>;
