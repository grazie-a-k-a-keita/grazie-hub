'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { addMonths, format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ZodDate } from 'zod';
import { z } from 'zod';

export default function Page() {
  const router = useRouter();

  const [radioValue, setRadioValue] = useState<'contact' | 'reservation'>('contact');

  const [FormSchema, setFormSchema] = useState<
    z.ZodObject<{
      name: z.ZodString;
      email: z.ZodString;
      message: z.ZodString;
      date: z.ZodDate | z.ZodOptional<ZodDate>;
    }>
  >(
    z.object({
      name: z.string().min(1, { message: "name can't be empty." }),
      email: z.string().email({ message: 'email must be a valid email address.' }),
      message: z.string().min(1, { message: "message can't be empty." }),
      date: z.date().optional(),
    }),
  );

  useEffect(() => {
    form.clearErrors('message');
    form.clearErrors('date');

    const newSchema = z.object({
      name: z.string().min(1, { message: "name can't be empty." }),
      email: z.string().email({ message: 'email must be a valid email address.' }),
      message:
        radioValue === 'contact'
          ? z.string().min(1, { message: "message can't be empty." })
          : z.string(),
      date:
        radioValue === 'contact'
          ? z.date().optional()
          : z.date({ message: "date can't be empty." }),
    });

    setFormSchema(newSchema);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioValue]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      date: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const url =
        radioValue === 'contact'
          ? process.env.NEXT_PUBLIC_NEWT_CONTACT_FORM_ENDPOINT
          : process.env.NEXT_PUBLIC_NEWT_RESERVATION_FORM_ENDPOINT;

      const response = await fetch(url ?? '', {
        method: 'POST',
        body: JSON.stringify(
          radioValue === 'contact'
            ? {
                name: data.name,
                email: data.email,
                message: data.message,
              }
            : {
                name: data.name,
                email: data.email,
                date: format(data.date as Date, 'yyyy年MM月dd日'),
                message: data.message,
              },
        ),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        router.push('/contact/thanks');
      } else {
        router.push('/contact/error');
      }
    } catch (err) {
      router.push('/contact/error');
    }
  };

  return (
    <div className='mx-auto max-w-screen-md'>
      <p className='my-16 text-center text-4xl font-bold'>Contact us</p>
      <Form {...form}>
        <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input maxLength={40} placeholder='John Smith' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input maxLength={140} placeholder='12345@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <RadioGroup
            className='flex space-x-4 py-8'
            onValueChange={(value) => {
              setRadioValue(value as typeof radioValue);
            }}
            value={radioValue}
          >
            <div className='flex items-center space-x-2'>
              <RadioGroupItem id='r1' value='contact' />
              <Label htmlFor='r1'>Contact</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem id='r2' value='reservation' />
              <Label htmlFor='r2'>Reservation</Label>
            </div>
          </RadioGroup>
          {radioValue === 'reservation' && (
            <FormField
              control={form.control}
              name='date'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                          variant='outline'
                        >
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                          <CalendarIcon className='ml-auto size-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent align='start' className='w-auto p-0'>
                      <Calendar
                        disabled={(date) => date > addMonths(new Date(), 2) || date < new Date()}
                        initialFocus
                        mode='single'
                        onSelect={field.onChange}
                        selected={field.value ? new Date(field.value) : undefined}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>{radioValue === 'contact' ? 'Message' : 'Other'}</FormLabel>
                <FormControl>
                  <Textarea maxLength={140} placeholder='Type your message here.' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='w-full' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
