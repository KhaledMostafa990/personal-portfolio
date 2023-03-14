import React from 'react';

export function Overlay({ overlayRef }: { overlayRef: any }) {
  return (
    <div
      ref={overlayRef}
      className="fixed left-0 top-0 z-10 w-screen transition-all duration-500 lg:hidden [&.active]:h-screen [&.active]:bg-black/40"
    />
  );
}
