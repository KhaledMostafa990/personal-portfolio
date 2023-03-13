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
        className={`relative h-11 px-10 flex items-center rounded-sm font-publicSans
        text-xs font-light uppercase text-dark-grey border hover:bg-dark-grey hover:text-very-light-grey 
        transition-all duration-500 
        ${disabled} ${classes}
      `}
      >
        {children}
      </button>
    </>
  );
}
