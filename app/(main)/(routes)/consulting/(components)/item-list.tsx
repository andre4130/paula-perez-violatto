import React from 'react';
import { Boxes } from 'lucide-react';

interface ItemListProps {
  item: string;
}

export const ItemList = ({ item }: ItemListProps) => {
  return (
    <div className="flex flex-row align-middle">
      <div className="w-30">
        <Boxes className="mr-4 mt-1 w-6 h-6" />
      </div>
      <div className="text-lg">{item}</div>
    </div>
  );
};
