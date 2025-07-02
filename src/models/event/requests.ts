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

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type CreateEventRequest = z.infer<typeof CreateEventRequestSchema>;
export type UpdateEventRequest = z.infer<typeof UpdateEventRequestSchema>;
