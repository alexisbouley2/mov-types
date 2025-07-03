# @mov/types

Shared types for MOV backend and mobile applications using Zod for runtime validation and type safety.

## Structure

```
src/
├── models/
│   └── user/           # User model types
│       ├── types.ts    # Database model schemas
│       ├── requests.ts # API request schemas (create, update, etc.)
│       └── responses.ts # API response schemas
├── common/
│   └── enums.ts        # Shared enum schemas
└── utils/
    └── validation.ts   # Validation helper functions
```

## Features

- **Runtime Validation**: All types are Zod schemas that can validate data at runtime
- **Type Safety**: TypeScript types are automatically inferred from schemas
- **Error Handling**: Built-in error messages and validation helpers
- **Reusable**: Schemas can be used in both backend and mobile

## Schema Structure

### Database Models (`types.ts`)

```typescript
export const UserSchema = z.object({
  id: z.string().uuid(),
  username: z.string().min(1),
  // ... other fields
});
export type User = z.infer<typeof UserSchema>;
```

### API Request Schemas (`requests.ts`)

```typescript
export const CreateUserRequestSchema = z.object({
  username: z.string().min(1, "Username is required"),
  phone: z.string().optional(),
});
export type CreateUserRequest = z.infer<typeof CreateUserRequestSchema>;
```

### API Response Schemas (`responses.ts`)

```typescript
export const CreateUserResponseSchema = z.object({
  success: z.boolean(),
  user: UserSchema,
  message: z.string().optional(),
});
export type CreateUserResponse = z.infer<typeof CreateUserResponseSchema>;
```

## Development

```bash
# Install dependencies
npm install

# Build types
npm run build

# Watch mode
npm run dev

# Clean build
npm run clean

#publish a new version of the package
npm publish
```
