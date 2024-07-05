import React, { HtmlHTMLAttributes } from 'react';

interface SectionIntroTextProps {
  text: string | React.ReactNode;
}

export default function SectionIntroText({ text }: SectionIntroTextProps) {
  return (
    <div className="flex text-text-secondary w-100 justify-center text-justify md:text-center py-[10px] md:py-[40px] ">
      <div className="pt-10 flex max-w-4xl">
        <div className="text-xl md:text-3xl py-3">{text}</div>
      </div>
    </div>
  );
}
