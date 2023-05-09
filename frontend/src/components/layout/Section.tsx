import React from 'react';

// interface SectionProps {
//   gridContainer?: boolean;
//   dataSection?: string;
//   children: React.ReactNode;
//   props: any;
// }

export function Section({ dataSection, gridContainer, children, ...props }: any) {
  return (
    <section data-section={dataSection} className={` ${props.props?.className}`} {...props}>
      {gridContainer ? <div className="container">{children}</div> : <div>{children}</div>}
    </section>
  );
}
