'use client';

import { ContactForm } from './(components)/contact-form';

export default function ContactPage() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="text-text-principal text-2xl py-12 ">Contact us through the following contact form:</div>
      <ContactForm />
    </div>
  );
}
