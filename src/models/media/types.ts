import { z } from "zod";

// Media entity types
export const MediaEntityTypeSchema = z.enum(["video", "user", "event"]);
export const MediaSizeSchema = z.enum(["thumbnail", "full"]);
export const MediaUploadTypeSchema = z.enum(["thumbnail", "image", "video"]);

// Inferred types from schemas
export type MediaEntityType = z.infer<typeof MediaEntityTypeSchema>;
export type MediaSize = z.infer<typeof MediaSizeSchema>;
export type MediaUploadType = z.infer<typeof MediaUploadTypeSchema>;
