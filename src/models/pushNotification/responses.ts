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

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type PushTokenResponse = z.infer<typeof PushTokenResponseSchema>;
export type RemovePushTokenResponse = z.infer<
  typeof RemovePushTokenResponseSchema
>;
