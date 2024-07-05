import React from 'react';

interface CvInfoRowProps {
  startDate?: string;
  endDate: string;
  description: JSX.Element;
}

export default function CvInfoRow({ startDate, endDate, description }: CvInfoRowProps) {
  return (
    <div className="flex flex-row w-full py-3 ">
      <div className="w-[35%] text-xl text-muted pr-5">{startDate ? `${startDate} to ${endDate}` : endDate}</div>
      <div className="w-[50%] text-primary text-lg">{description}</div>
    </div>
  );
}
