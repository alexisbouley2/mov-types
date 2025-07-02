import { z } from "zod";

// User status enum
export const UserStatusSchema = z.enum(["active", "deleted"]);
export type UserStatus = z.infer<typeof UserStatusSchema>;

// Media type enum
export const MediaTypeSchema = z.enum(["image", "video", "thumbnail"]);
export type MediaType = z.infer<typeof MediaTypeSchema>;

// Entity type enum
export const EntityTypeSchema = z.enum(["user", "event", "video"]);
export type EntityType = z.infer<typeof EntityTypeSchema>;

// Video status enum
export const VideoStatusSchema = z.enum(["pending", "published"]);
export type VideoStatus = z.infer<typeof VideoStatusSchema>;

// Message type enum
export const MessageTypeSchema = z.enum(["text", "image", "video"]);
export type MessageType = z.infer<typeof MessageTypeSchema>;
