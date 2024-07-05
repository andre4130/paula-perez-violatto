'use client';
import React from 'react';
import Footer from '@/components/femcalculComponents/footer/footer';
import NavigationDrawer from '@/components/femcalculComponents/navigationDrawer/navigation-drawer';
import Navigation from '@/components/femcalculComponents/navigationMenu/navigation-menu';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-100 min-h-screen flex-column">
      <Navigation />
      <NavigationDrawer />
      <div className="pt-[74px] min-h-[calc(100vh-100px)]">{children}</div>
      <Footer />
    </div>
  );
}
