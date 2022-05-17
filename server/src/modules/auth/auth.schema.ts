import {object, string, TypeOf} from 'zod';

export const loginSchema = {
    body: object({
        email: string({
            required_error: 'email is required',
        }).email('Not a valid email'),
        password: string({
            required_error: 'password is required',
        })
            .min(6, 'password must be at least 6 characters long')
            .max(64, 'password must be at most 64 characters long'),
    }),
};

export type LoginBody = TypeOf<typeof loginSchema.body>;