import { z } from "zod";
import { EventForListSchema, ParticipantSchema } from "./types";

// Categorized events response schema
export const CategorizedEventsResponseSchema = z.object({
  past: z.array(EventForListSchema),
  current: z.array(EventForListSchema),
  planned: z.array(EventForListSchema),
});

// Event participants response schema
export const EventParticipantsResponseSchema = z.object({
  participants: z.array(ParticipantSchema),
  hasMore: z.boolean(),
  page: z.number(),
  total: z.number(),
  event: z.object({
    id: z.string().uuid(),
    name: z.string().nullable(),
  }),
});

// Update Event response schema
export const UpdateEventResponseSchema = z.object({
  message: z.string(),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type CategorizedEventsResponse = z.infer<
  typeof CategorizedEventsResponseSchema
>;
export type EventParticipantsResponse = z.infer<
  typeof EventParticipantsResponseSchema
>;
export type UpdateEventResponse = z.infer<typeof UpdateEventResponseSchema>;
