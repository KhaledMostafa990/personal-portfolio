import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dataSection?: string;
  gridContainer?: boolean;
}

export function Section({ children, className, id, dataSection, gridContainer }: SectionProps) {
  return (
    <section id={id} data-section={dataSection} className={`min-h-full  ${className}`}>
      {gridContainer ? <div className="container">{children}</div> : <div>{children}</div>}
    </section>
  );
}
