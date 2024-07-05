import React from 'react';

interface ValuesCardProps {
  icon: React.ReactElement;
  text: React.ReactElement;
}

export const ValuesCard = ({ icon, text }: ValuesCardProps) => {
  return (
    <div className="flex flex-row w-100 items-center py-8 md:px-[100px] text-text-secondary">
      <div className="pr-8 flex text-primary">{icon}</div>
      <div className="text-md md:text-2xl">{text}</div>
    </div>
  );
};
