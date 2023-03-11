import Link from 'next/link';
import React from 'react';

export const NavBar = ({
  navRef,
  navListRef,
  navListItems,
}: {
  navRef: any;
  navListRef: any;
  navListItems: string[];
}) => {
  return (
    <>
      {/* Navigation items */}
      <nav
        ref={navRef}
        className="h-fit w-full
        absolute top-[50%] left-[0%] translate-y-[-150%]
        [&.active]:translate-y-[19%] translate-x-[-0%]
        transition-all duration-500 [&.active]:block
        bg-transparent [&.active]:bg-background-black lg:min-w-fit
        lg:static lg:h-fit lg:w-fit lg:translate-x-0 lg:translate-y-0"
      >
        <ul ref={navListRef} className="flex flex-col px-6 py-8 lg:p-0 lg:flex-row">
          {navListItems.map((item, index) => {
            const itemLink = item === 'Our Company' ? '/about' : `/${item.toLowerCase().replace(' ', '-')}`;
            return (
              <li
                key={index}
                className={` lg:py-0 lg:border-none lg:mx-5`}
              >
                <Link
                  href={itemLink}
                  className="uppercase block py-4 text-start text-white text-xl hover:underline transition-all duration-200 border-b-4 border-transparent lg:py-0 lg:text-xs lg:text-dark-grey"
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
