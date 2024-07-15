'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "name can't be empty.",
  }),
  email: z.string().email({
    message: 'email must be a valid email address.',
  }),
  message: z.string().min(1, {
    message: "message can't be empty.",
  }),
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  return <FormProvider {...form}>{children}</FormProvider>;
}
