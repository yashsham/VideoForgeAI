import { z } from 'zod';

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  rememberMe: z.boolean().optional()
});

const SignUpSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export const signIn = async (data: z.infer<typeof SignInSchema>) => {
  try {
    const validated = SignInSchema.parse(data);
    // Here you would make an API call to your backend
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validated)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to sign in');
    }

    const result = await response.json();
    localStorage.setItem('token', result.token);
    if (data.rememberMe) {
      localStorage.setItem('rememberMe', 'true');
    }

    return result;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error('Invalid form data');
    }
    throw error;
  }
};

export const signUp = async (data: z.infer<typeof SignUpSchema>) => {
  try {
    const validated = SignUpSchema.parse(data);
    // Here you would make an API call to your backend
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validated)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to sign up');
    }

    return response.json();
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error('Invalid form data');
    }
    throw error;
  }
};

export const signOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('rememberMe');
  // Additional cleanup if needed
};