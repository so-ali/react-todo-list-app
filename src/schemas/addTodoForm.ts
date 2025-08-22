import z from 'zod';

export const SchemaAddForm = z.object({
  todo: z.string().min(2, 'Todo must be at least 2 characters long'),
});
