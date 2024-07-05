import React from 'react';
import SectionTitle from './components/section-title';

interface SectionWrapperProps {
  title: string;
  boxClassNames?: string;
  titleClassNames?: string;
  children: JSX.Element;
}

export default function SectionWrapper({ title, boxClassNames, titleClassNames, children }: SectionWrapperProps) {
  return (
    <div className="py-4 md:py-[40px]">
      <SectionTitle title={title} boxClassNames={boxClassNames} titleClassNames={titleClassNames} />
      <div className="text-text-secondary text-justify pt-6">{children}</div>
    </div>
  );
}
