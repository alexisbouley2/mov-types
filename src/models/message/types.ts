import { z } from "zod";

// Base Message schema - represents the complete message entity
export const MessageSchema = z.object({
  id: z.string().uuid(),
  content: z.string(),
  createdAt: z.coerce.date(),
  type: z.string(),
  eventId: z.string().uuid(),
  senderId: z.string().uuid(),
});

// Message sender schema
export const MessageSenderSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
  profileThumbnailPath: z.string().nullable(),
  profileThumbnailUrl: z.string().nullable(),
});

export const MessageDetailsSchema = z.object({
  id: z.string().uuid(),
  content: z.string(),
  createdAt: z.coerce.date(),
  type: z.string(),
  sender: MessageSenderSchema,
});

// Inferred types from schemas
export type Message = z.infer<typeof MessageSchema>;
export type MessageSender = z.infer<typeof MessageSenderSchema>;
export type MessageDetails = z.infer<typeof MessageDetailsSchema>;
