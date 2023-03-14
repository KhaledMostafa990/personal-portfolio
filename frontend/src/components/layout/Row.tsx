import React from 'react';

type RowProps = React.HTMLProps<HTMLDivElement>;

export function Row({ ...props }: RowProps) {
  const { className, children } = props ?? {};

  return (
    <div
      className={`xl:col-start-0 relative col-span-10 col-start-2 h-auto w-full 
      overflow-hidden xl:col-span-12 
      ${className ?? ''}
    `}
    >
      {children}
    </div>
  );
}
