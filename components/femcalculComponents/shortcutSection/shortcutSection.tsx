import React from 'react';

interface ShortcutSectionProps {
  title: string;
  children: React.ReactElement;
  mainDivClassName?: string;
}

export default function ShortcutSection({ title, mainDivClassName, children }: ShortcutSectionProps) {
  return (
    <div className={mainDivClassName}>
      <h4 className={`py-6 md:py-10 text-center`}>
        <strong>{title}</strong>
      </h4>
      <div className="w-full min-h-40 flex justify-center p-4 pb-10">
        <div className="min-h-100 flex sm:flex-row flex-col sm:justify-center justify-around w-full ">{children}</div>
      </div>
    </div>
  );
}
