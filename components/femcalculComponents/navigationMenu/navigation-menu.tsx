'use client';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import NavButton from '@/components/femcalculComponents/nav-button';
import mesh from '../../../public/images/research.jpg';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const underlinedPathname = 'border-b-[2px] border-b-primary-light transition-all ease-in-out';

  return (
    <NavigationMenu className="hidden md:flex align-middle justify-start w-100  p-4 bg-white w-full border-b-slate-500 border-b-3 b-opacity-50 border-b-[1px]">
      <div className="flex flex-row w-full justify-between items-center">
        <div>
          <Link href={'/'} className="flex items-center">
            <Image src="/femlogo.svg" height={40} width={40} alt={'logo'} className=" mr-3" />
            <strong>
              <h4 className="text-primary" style={{ filter: `url(${mesh.src})` }}>
                Fem Calcul
              </h4>
            </strong>
          </Link>
        </div>
        <div>
          <NavigationMenuList>
            <NavButton className={`${pathname === '/consulting' ? underlinedPathname : undefined}`}>
              <Link href={'/consulting'}>Consulting</Link>
            </NavButton>
            <NavButton className={`${pathname === '/education' ? underlinedPathname : undefined}`}>
              <Link href={'/education'}>Education</Link>
            </NavButton>
            <NavButton className={`${pathname === '/research' ? underlinedPathname : undefined}`}>
              <Link href={'/research'}>Research</Link>
            </NavButton>
            <NavButton className={`${pathname === '/technical-writing' ? underlinedPathname : undefined}`}>
              <Link href={'/technical-writing'}>Technical Writing</Link>
            </NavButton>
            <NavButton className={`${pathname === '/about' ? underlinedPathname : undefined}`}>
              <Link href={'/about'}>About</Link>
            </NavButton>
            <NavButton className={`${pathname === '/contact' ? underlinedPathname : undefined}`}>
              <Link href={'/contact'}>Contact</Link>
            </NavButton>
            <NavButton className={`${pathname === '/cv' ? underlinedPathname : undefined}`}>
              <Link href={'/cv'}>CV</Link>
            </NavButton>
          </NavigationMenuList>
        </div>
      </div>
    </NavigationMenu>
  );
}
