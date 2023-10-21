import {z } from 'zod';

export const signUpSchema  = z.object({
    name: z.string().min(3).max(10),
    email: z.string().email(),
    password: z.string(),
    cPass: z.string(),
    age: z.number(),
    gender: z.string()
}).required().superRefine((val, ctx) => {
    if (val.password !== val.cPass) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "your password must match cpass",
        path: ['cPass']
      });
    }
  });
  ;