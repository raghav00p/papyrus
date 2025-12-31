import { z } from 'zod';
import { insertCourseSchema, insertSyllabusItemSchema, insertSubtaskSchema, courses, syllabusItems, subtasks } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  courses: {
    list: {
      method: 'GET' as const,
      path: '/api/courses',
      responses: {
        200: z.array(z.custom<typeof courses.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/courses',
      input: insertCourseSchema,
      responses: {
        201: z.custom<typeof courses.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/courses/:id',
      responses: {
        200: z.custom<typeof courses.$inferSelect & { items: (typeof syllabusItems.$inferSelect & { subtasks: typeof subtasks.$inferSelect[] })[] }>(),
        404: errorSchemas.notFound,
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/courses/:id',
      responses: {
        204: z.void(),
        404: errorSchemas.notFound,
      },
    },
  },
  items: {
    create: {
      method: 'POST' as const,
      path: '/api/items',
      input: insertSyllabusItemSchema,
      responses: {
        201: z.custom<typeof syllabusItems.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    update: {
      method: 'PUT' as const,
      path: '/api/items/:id',
      input: insertSyllabusItemSchema.partial(),
      responses: {
        200: z.custom<typeof syllabusItems.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/items/:id',
      responses: {
        204: z.void(),
        404: errorSchemas.notFound,
      },
    },
  },
  subtasks: {
    create: {
      method: 'POST' as const,
      path: '/api/subtasks',
      input: insertSubtaskSchema,
      responses: {
        201: z.custom<typeof subtasks.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    update: {
      method: 'PUT' as const,
      path: '/api/subtasks/:id',
      input: insertSubtaskSchema.partial(),
      responses: {
        200: z.custom<typeof subtasks.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/subtasks/:id',
      responses: {
        204: z.void(),
        404: errorSchemas.notFound,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
