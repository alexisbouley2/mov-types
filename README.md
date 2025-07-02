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

## Usage

### In Backend (NestJS) - Clean Approach

```typescript
import {
  User,
  CreateUserRequest,
  CreateUserResponse,
  UpdateUserRequest,
} from "@mov/types";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() data: CreateUserRequest
  ): Promise<CreateUserResponse> {
    const user = await this.userService.create(data);

    return {
      success: true,
      user,
      message: "User created successfully",
    };
  }

  @Get(":id")
  async getUser(@Param("id") id: string): Promise<{ user: User }> {
    const user = await this.userService.findById(id);
    return { user };
  }

  @Put(":id")
  async updateUser(
    @Param("id") id: string,
    @Body() data: UpdateUserRequest
  ): Promise<CreateUserResponse> {
    const user = await this.userService.update(id, data);

    return {
      success: true,
      user,
      message: "User updated successfully",
    };
  }
}

// Service layer
@Injectable()
export class UserService {
  async create(data: CreateUserRequest): Promise<User> {
    // Business logic here
    return this.prisma.user.create({ data });
  }

  async findById(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateUserRequest): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }
}
```

### In Backend (NestJS) - With Runtime Validation (Optional)

```typescript
import { CreateUserRequestSchema, validateSchema } from "@mov/types";

@Controller("users")
export class UserController {
  @Post()
  async createUser(@Body() body: unknown): Promise<CreateUserResponse> {
    // Only validate when you need runtime validation
    const data = validateSchema(CreateUserRequestSchema, body);
    const user = await this.userService.create(data);
    return { success: true, user };
  }
}
```

### In Mobile (React Native)

```typescript
import { User, CreateUserRequest, CreateUserResponse } from "@mov/types";

const createUser = async (userData: CreateUserRequest): Promise<User> => {
  const response = await api.post<CreateUserResponse>("/users", userData);
  return response.data.user;
};

// Usage
const newUser = await createUser({
  username: "john_doe",
  phone: "+1234567890",
});
```

### Type Usage

```typescript
import {
  User,
  CreateUserRequest,
  UpdateUserRequest,
  CreateUserResponse,
  UserStatus,
  MediaType,
} from "@mov/types";

// Use inferred types directly
const user: User = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  username: "john_doe",
  isDeleted: false,
};

const createRequest: CreateUserRequest = {
  username: "john_doe",
  phone: "+1234567890",
};

const updateRequest: UpdateUserRequest = {
  username: "john_updated",
};
```

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

## When to Use Runtime Validation

Use `validateSchema` only when you need runtime validation:

1. **External API calls** - Validate responses from third-party APIs
2. **File uploads** - Validate uploaded data
3. **Dynamic data** - When data comes from unknown sources
4. **Mobile apps** - Validate API responses

For typical NestJS controllers with proper TypeScript, the direct typing approach is cleaner and more idiomatic.

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
```
