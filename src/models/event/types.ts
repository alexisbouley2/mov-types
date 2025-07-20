import { z } from "zod";

// Base Event schema - represents the complete event entity
export const EventSchema = z.object({
  id: z.string().uuid(),
  name: z.string().nullable(),
  information: z.string().nullable(),
  date: z.coerce.date(),
  createdAt: z.coerce.date(),
  coverImagePath: z.string().nullable(),
  coverThumbnailPath: z.string().nullable(),
  coverImageUrl: z.string().nullable(),
  coverThumbnailUrl: z.string().nullable(),
  adminId: z.string().uuid(),
});

// Participant schema - represents a participant in an event
export const ParticipantSchema = z.object({
  id: z.string().uuid(),
  joinedAt: z.coerce.date(),
  confirmed: z.boolean(),
  user: z.object({
    id: z.string().uuid(),
    username: z.string(),
    profileThumbnailPath: z.string().nullable(),
    profileThumbnailUrl: z.string().nullable(),
  }),
});

// Event with admin, participants and videos schema
export const EventWithDetailsSchema = EventSchema.extend({
  admin: z.object({
    id: z.string().uuid(),
    username: z.string(),
    profileThumbnailPath: z.string().nullable(),
    profileThumbnailUrl: z.string().nullable(),
  }),
  participants: z.array(ParticipantSchema),
  videos: z.array(
    z.object({
      id: z.string().uuid(),
      addedAt: z.coerce.date(),
      video: z.object({
        id: z.string().uuid(),
        videoPath: z.string(),
        thumbnailPath: z.string(),
        createdAt: z.coerce.date(),
        status: z.string(),
        user: z.object({
          id: z.string().uuid(),
          username: z.string(),
        }),
      }),
    })
  ),
});

// Event for user events list schema
export const EventForListSchema = EventSchema.extend({
  admin: z.object({
    id: z.string().uuid(),
    username: z.string(),
    profileThumbnailPath: z.string().nullable(),
    profileThumbnailUrl: z.string().nullable(),
  }),
  participants: z.array(ParticipantSchema),
  _count: z.object({
    videos: z.number(),
  }),
});

// Inferred types from schemas
export type Event = z.infer<typeof EventSchema>;
export type EventWithDetails = z.infer<typeof EventWithDetailsSchema>;
export type EventForList = z.infer<typeof EventForListSchema>;
export type Participant = z.infer<typeof ParticipantSchema>;
