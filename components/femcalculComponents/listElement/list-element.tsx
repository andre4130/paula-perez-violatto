import React from 'react';

interface ListElementProps {
  icon: React.ReactElement;
  text: React.ReactElement;
}

export default function ListElement({ icon, text }: ListElementProps) {
  return (
    <li>
      <div className="flex flex-row w-100 items-center py-2 text-text-secondary">
        <div className="pr-4 flex text-primary">{icon}</div>
        <div className="text-md md:text-lg">{text}</div>
      </div>
    </li>
  );
}
