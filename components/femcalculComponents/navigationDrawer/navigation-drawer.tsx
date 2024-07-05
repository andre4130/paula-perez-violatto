'use client';

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import NavButton from '../nav-button';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';

export default function NavigationDrawer() {
  return (
    <div className="md:hidden p-6 fixed flex w-full bg-[#fff] z-[1] border-b-[2px]">
      <Sheet>
        <SheetTrigger className="w-full">
          <div className="flex flex-row w-full justify-between">
            <Menu />
            <div>
              <p>
                <strong>FEM Calcul</strong>
              </p>
            </div>
            <div></div>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="justify-center ml-[-6px]">
              <SheetClose asChild>
                <Link href={'/'} className="flex items-center">
                  <Image src="/femlogo.svg" height={40} width={40} alt={'logo'} className=" mr-3" />{' '}
                  <strong>Fem Calcul</strong>
                </Link>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
          <div className="flex w-100 justify-center pt-4">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col w-full items-center justify-start">
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/consulting'}>Consulting</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/education'}>Education</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/research'}>Research</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/technical-writing'}>Technical Writing</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/about'}>About</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/contact'}>Contact</Link>
                  </SheetClose>
                </NavButton>
                <NavButton>
                  <SheetClose asChild>
                    <Link href={'/cv'}>CV</Link>
                  </SheetClose>
                </NavButton>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
