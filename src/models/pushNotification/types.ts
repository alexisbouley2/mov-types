import { z } from "zod";

// ============================================================================
// PUSH NOTIFICATION BASE SCHEMAS
// ============================================================================

// Push token schema
export const PushTokenSchema = z.object({
  id: z.string().uuid(),
  token: z.string(),
  userId: z.string().uuid(),
  lastUsedAt: z.coerce.date(),
  isActive: z.boolean(),
});

// ============================================================================
// INFERRED TYPES
// ============================================================================

export type PushToken = z.infer<typeof PushTokenSchema>;
