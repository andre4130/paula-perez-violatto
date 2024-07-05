'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export interface MessageProps {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  institution?: string;
  jobTitle?: string;
}

const FormSchema = z.object({
  fullName: z.string().min(1, {
    message: 'Your name is required',
  }),
  email: z.string().email({
    message: 'Email is not valid',
  }),
  phone: z.union([z.number(), z.string()]),
  subject: z.string().min(1, {
    message: 'A subject is required',
  }),
  institution: z.string(),
  message: z.string().min(1, {
    message: 'A message is required',
  }),
  jobTitle: z.string(),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // fullName: 'andre maia',
      // email: 'andre.maia@nemuru.com',
      // subject: 'testing',
      // institution: 'nemuru',
      // jobTitle: '',
      // phone: '+34667493884',
      // message: 'testing testing',
      fullName: '',
      email: '',
      subject: '',
      institution: '',
      jobTitle: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const apiEndpoint = '/api/email';
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        toast('Success! Your message has been sent.', {
          description: 'Thank you for contacting with FEM Calcul. We will get back to you as soon as possible.',
        });
        setLoading(false);
        form.reset({ fullName: '', email: '', subject: '', institution: '', message: '' });
      })
      .catch((err) => {
        setLoading(false);
        form.reset({ fullName: '', email: '', subject: '', institution: '', message: '' });
        toast('Ooops! An error ocurred', {
          description: `We are sorry. Please try sending your message again. Error code: ${err}`,
        });
      });
  }

  return (
    <div className="flex justify-center" style={{ width: '-webkit-fill-available' }}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <div className="grid grid-cols-2 grid-flow-row gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-text-primary">Full name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-text-primary">Job title</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-text-primary">Your email*</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-text-primary">Your phone</FormLabel>
                  <FormControl>
                    <Input type="phone" placeholder="Your phone number here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-text-primary">Institution/Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Your institution/company..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-text-primary">Subject*</FormLabel>
                  <FormControl>
                    <Input placeholder="Your subject..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-text-primary">Message*</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write your message here..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="min-w-[100px] text-text-title bg-primary" type="submit">
            {loading ? <LoadingSpinner /> : 'Send message'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
