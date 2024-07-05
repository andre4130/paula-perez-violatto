'use client';

import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';
import React, { CSSProperties } from 'react';

interface SectionBannerProps {
  image: StaticImageData;
  title: string;
  style?: CSSProperties;
  titleStyle?: CSSProperties;
  divClassName?: string;
}

export default function SectionBanner({ image, title, style, titleStyle, divClassName = '' }: SectionBannerProps) {
  return (
    <div
      style={{ ...style, backgroundImage: `url(${image.src})` }}
      className={cn(
        'rounded-md max-w-100 opacity-80 h-[200px] pt-[60px] mt-7 bg-auto md:bg-cover bg-center flex flex-col items-center justify-center p-4',
        divClassName,
      )}
    >
      <div className="text-3xl md:text-5xl p-4 rounded-lg bg-white opacity-90 text-primary" style={{ ...titleStyle }}>
        <strong>{title}</strong>
      </div>
    </div>
  );
}
