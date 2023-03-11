import React from 'react';

export function HamburgerButton({
  onClick,
  menuBtnRef,
}: {
  onClick: any;
  menuBtnRef: any;
}) {
  return (
    <>
      <div className="lg:hidden flex items-center z-40">
        <button
          className="custom-hamburger-menu w-[28px] h-[19.5px] flex gap-[6px]"
          onClick={onClick}
          ref={menuBtnRef}
          type="button"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=" bg-background-black block w-7 h-[2.5px]" />
          <span className=" bg-background-black block w-7 h-[2.5px]" />
          <span className=" bg-background-black block w-7 h-[2.5px]" />
        </button>
      </div>
    </>
  );
}
