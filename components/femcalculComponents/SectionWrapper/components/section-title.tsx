import React from 'react';

interface SectionTitleProps {
  title: string;
  boxClassNames?: string;
  titleClassNames?: string;
}

export default function SectionTitle({ title, boxClassNames, titleClassNames }: SectionTitleProps) {
  return (
    <div className={`flex w-100 border-b-[1px] border-b-gray-400 py-2 my-[24px] ${boxClassNames}`}>
      <div className={`text-xl md:text-4xl text-text-primary ${titleClassNames}`}>{title}</div>
    </div>
  );
}
