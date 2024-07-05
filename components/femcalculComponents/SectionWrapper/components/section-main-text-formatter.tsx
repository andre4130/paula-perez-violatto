import React from 'react';

interface SectionMainTextProps {
  children: React.ReactElement;
}

export const SectionMainTextFormatter = ({ children }: SectionMainTextProps) => {
  return <div className="text-justify text-2xl text-text-secondary">{children}</div>;
};
