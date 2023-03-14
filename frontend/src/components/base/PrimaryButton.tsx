import React from 'react';

export function PrimaryButton({
  children,
  classes,
  isDisabled,
}: {
  children: React.ReactNode;
  classes?: string;
  isDisabled?: boolean;
}) {
  const disabled = isDisabled ? 'bg-light-grey' : 'bg-dark-blue';
  return (
    <>
      <button
        className={`group relative flex h-12 items-center gap-6 overflow-hidden rounded-sm pr-10 font-publicSans
        text-xs font-light uppercase text-white ${disabled} transition-all
        duration-500 hover:bg-primary-default 
        ${classes}
      `}
      >
        <div className={`flex h-full items-center justify-center bg-black/10 px-5`}>
          <svg
            className=" stroke-primary-default group-hover:stroke-white group-disabled:stroke-white"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M0 9l8 4 8-4" />
              <path opacity=".5" d="M0 5l8 4 8-4" />
              <path opacity=".25" d="M0 1l8 4 8-4" />
            </g>
          </svg>
        </div>

        {children}
      </button>
    </>
  );
}
