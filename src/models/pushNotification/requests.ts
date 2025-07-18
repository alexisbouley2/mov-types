import { z } from "zod";

// ============================================================================
// PUSH NOTIFICATION API REQUEST SCHEMAS
// ============================================================================

// Create/Update push token request schema
export const CreatePushTokenRequestSchema = z.object({
  userId: z.string().uuid("userId must be a valid UUID"),
  token: z.string().min(1, "Token is required"),
});

// Remove push token request schema
export const RemovePushTokenRequestSchema = z.object({
  userId: z.string().uuid("userId must be a valid UUID"),
  token: z.string().min(1, "Token is required"),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type CreatePushTokenRequest = z.infer<
  typeof CreatePushTokenRequestSchema
>;
export type RemovePushTokenRequest = z.infer<
  typeof RemovePushTokenRequestSchema
>;
