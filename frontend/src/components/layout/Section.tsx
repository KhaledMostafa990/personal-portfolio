import React from 'react';

interface SectionProps {
  className?: string;
  gridContainer?: boolean;
  id?: string;
  ref?: React.RefObject<HTMLElement | any>;
  dataSection?: string;
  children: React.ReactNode;
}

export function Section({
  children,
  className,
  id,
  ref,
  dataSection,
  gridContainer,
}: SectionProps) {
  return (
    <section id={id} ref={ref} data-section={dataSection} className={` ${className}`}>
      {gridContainer ? <div className="container">{children}</div> : <div>{children}</div>}
    </section>
  );
}
