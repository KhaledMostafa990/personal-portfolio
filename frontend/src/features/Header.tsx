'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { GlobalData } from '@/store/client/globalData';

import { menuClickHandler, useViewportOnResize } from '@/utils';
import { HamburgerButton, Logo, Overlay } from '@/components/base';
import { NavBar } from '@/components/layout';

export default function Header() {
  const { navListItems } = useSelector(({ globalData }: { globalData: GlobalData }) => globalData);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const navList = useRef<HTMLElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLElement | null>(null);
  const activeClass = 'active';

  const { isDesktop } = useViewportOnResize();

  const toggleMenu = menuClickHandler(
    menuBtnRef.current,
    navRef.current,
    logoRef.current,
    overlayRef.current,
    activeClass,
  );

  if (isDesktop && navRef?.current?.classList.contains('active')) toggleMenu();

  return (
    <header className="z-20 lg:fixed lg:w-full lg:h-[150px] lg:bg-background-default">
      <Overlay overlayRef={overlayRef} />

      <div
        ref={headerRef}
        className="container fixed bg-background-default
          shadow-sm transition-all duration-[0.84s] z-20
          lg:left-[50%] lg:translate-x-[-50%]"
      >
        <div
          className="col-start-2 col-span-10 py-8 flex justify-between items-center transition-all duration-[0.84s]
          lg:py-16 xl:col-start-0 xl:col-span-12 "
        >
          <Link href={'/'}>
            <Logo onLight />
          </Link>

          <NavBar withMenu navRef={navRef} navListRef={navList} navListItems={navListItems} />
          <HamburgerButton onClick={toggleMenu} menuBtnRef={menuBtnRef} />
        </div>
      </div>
    </header>
  );
}
