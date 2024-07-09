import { z } from 'zod';
import { IAdmin } from '../interfaces/admin.interface';

const adminSchema = z.object({
  username: z.string().min(1).max(50),
  password: z.string().min(6).max(50),
  // role: z.enum(['admin', 'customer']).optional(),
});

const loginSchema = z.object({
  username: z.string().min(1).max(50),
  password: z.string().min(6).max(50),
});

const validateAdmin = (data: IAdmin) => {
  return adminSchema.safeParse(data);
};

const validateLogin = (data: { username: string; password: string }) => {
  return loginSchema.safeParse(data);
};

export { validateAdmin, validateLogin };
