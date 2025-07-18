import { z } from "zod";
import { PushTokenSchema } from "./types";

// ============================================================================
// PUSH NOTIFICATION API RESPONSE SCHEMAS
// ============================================================================

// Push token response schema (same as the base schema)
export const PushTokenResponseSchema = PushTokenSchema;

export const RemovePushTokenResponseSchema = z.object({
  success: z.boolean(),
});

// Badge count response schema
export const BadgeCountResponseSchema = z.object({
  count: z.number().min(0),
});

// Mark notifications as read response schema
export const MarkNotificationsReadResponseSchema = z.object({
  markedCount: z.number().min(0),
  newBadgeCount: z.number().min(0),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type PushTokenResponse = z.infer<typeof PushTokenResponseSchema>;
export type RemovePushTokenResponse = z.infer<
  typeof RemovePushTokenResponseSchema
>;
export type BadgeCountResponse = z.infer<typeof BadgeCountResponseSchema>;
export type MarkNotificationsReadResponse = z.infer<
  typeof MarkNotificationsReadResponseSchema
>;
