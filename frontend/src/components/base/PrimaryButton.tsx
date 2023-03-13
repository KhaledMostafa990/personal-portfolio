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
        className={`group relative overflow-hidden h-12 pr-10 flex gap-6 items-center rounded-sm font-publicSans
        text-xs font-light uppercase text-white ${disabled} hover:bg-primary-default
        transition-all duration-500 
        ${classes}
      `}
      >
        <div className={`px-5 h-full flex justify-center items-center bg-black/10`}>
          <svg
            className=" stroke-primary-default group-disabled:stroke-white group-hover:stroke-white"
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
