import Link from 'next/link';
import React from 'react';

export const NavBar = ({
  navRef,
  navListRef,
  navListItems,
  withMenu,
}: {
  navRef?: any;
  navListRef?: any;
  navListItems: string[];
  withMenu: boolean;
}) => {
  const menuClasses = withMenu
    ? 'absolute top-[50%] left-[0%] translate-y-[-150%] [&.active]:translate-y-[19%] translate-x-[-0%] transition-all duration-500 [&.active]:block bg-transparent [&.active]:bg-background-black'
    : '';

  return (
    <>
      {/* Navigation items */}
      <nav
        ref={navRef}
        className={`h-fit w-full ${menuClasses} md:static md:w-fit md:max-w-fit md:translate-x-0 md:translate-y-0`}
      >
        <ul
          ref={navListRef}
          className={`flex flex-col px-6 md:p-0  ${
            withMenu ? 'py-8 md:flex-row' : 'items-center md:flex-row'
          }`}
        >
          {navListItems.map((item, index) => {
            const itemLink = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
            return (
              <li key={index} className={`${withMenu ? '' : 'px-3'} md:px-6`}>
                <Link
                  href={itemLink}
                  className={`block border-b-4 border-transparent py-4 text-start 
                  uppercase text-white transition-all duration-200 hover:text-primary-default hover:underline
                  md:py-0 ${withMenu ? 'text-xl md:text-dark-grey' : 'text-xs'} md:text-xs `}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
