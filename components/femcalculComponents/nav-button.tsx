import React from 'react';
import { NavigationMenuItem } from '../ui/navigation-menu';
import { usePathname } from 'next/navigation';

export default function NavButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <NavigationMenuItem
      className={`p-2 min-w-[50px] text-primary flex justify-center rounded-sm hover:bg-slate-100 ${className}`}
    >
      {children}
    </NavigationMenuItem>
  );
}
