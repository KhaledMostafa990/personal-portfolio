import React from 'react';

type RowProps = React.HTMLProps<HTMLDivElement>;

export function Row({ ...props }: RowProps) {
  const { className, children } = props ?? {};

  return (
    <div
      className={`relative overflow-hidden w-full h-auto col-start-2 col-span-10 
      xl:col-start-0 xl:col-span-12 
      ${className ?? ''}
    `}
    >
      {children}
    </div>
  );
}
