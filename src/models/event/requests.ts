import { z } from "zod";

// ============================================================================
// EVENT API REQUEST SCHEMAS - Used for HTTP request validation
// ============================================================================

// Create Event request schema
export const CreateEventRequestSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  information: z.string().optional(),
  date: z.date(),
  location: z.string().optional(),
  adminId: z.string().uuid(),
  coverImagePath: z.string().optional(),
  coverThumbnailPath: z.string().optional(),
});

// Update Event request schema
export const UpdateEventRequestSchema = z.object({
  name: z.string().optional(),
  information: z.string().optional(),
  date: z.date().optional(),
  location: z.string().optional(),
  coverImagePath: z.string().optional(),
  coverThumbnailPath: z.string().optional(),
});

// Generate invite request schema
export const GenerateInviteRequestSchema = z.object({
  userId: z.string().uuid(),
});

// Validate invite request schema
export const ValidateInviteRequestSchema = z.object({
  token: z.string().min(1, "Token is required"),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type CreateEventRequest = z.infer<typeof CreateEventRequestSchema>;
export type UpdateEventRequest = z.infer<typeof UpdateEventRequestSchema>;
export type GenerateInviteRequest = z.infer<typeof GenerateInviteRequestSchema>;
export type ValidateInviteRequest = z.infer<typeof ValidateInviteRequestSchema>;
