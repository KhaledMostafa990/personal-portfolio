import React from 'react';

export function HamburgerButton({ onClick, menuBtnRef }: { onClick: any; menuBtnRef: any }) {
  return (
    <>
      <div className="z-40 flex items-center md:hidden">
        <button
          className="custom-hamburger-menu flex h-[19.5px] w-[28px] gap-[6px]"
          onClick={onClick}
          ref={menuBtnRef}
          type="button"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=" block h-[2.5px] w-7 bg-background-black" />
          <span className=" block h-[2.5px] w-7 bg-background-black" />
          <span className=" block h-[2.5px] w-7 bg-background-black" />
        </button>
      </div>
    </>
  );
}
