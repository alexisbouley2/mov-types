import { z } from "zod";

// Message sender schema
export const MessageSenderSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
  profileThumbnailPath: z.string().nullable(),
  profileThumbnailUrl: z.string().nullable(),
});

export const MessageSchema = z.object({
  id: z.string().uuid(),
  content: z.string(),
  createdAt: z.coerce.date(),
  type: z.string(),
  sender: MessageSenderSchema,
});

// Inferred types from schemas
export type MessageSender = z.infer<typeof MessageSenderSchema>;
export type Message = z.infer<typeof MessageSchema>;
