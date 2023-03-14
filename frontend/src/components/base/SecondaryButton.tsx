import React from 'react';

export function SecondaryButton({
  children,
  classes,
  isDisabled,
}: {
  children: React.ReactNode;
  classes?: string;
  isDisabled?: boolean;
}) {
  const disabled = isDisabled ? 'border-light-grey' : 'border-dark-grey';
  return (
    <>
      <button
        className={`relative flex h-11 items-center rounded-sm border px-10
        font-publicSans text-xs font-light uppercase text-dark-grey transition-all duration-500 
        hover:bg-dark-grey hover:text-very-light-grey 
        ${disabled} ${classes}
      `}
      >
        {children}
      </button>
    </>
  );
}
