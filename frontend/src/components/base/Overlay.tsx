import React from 'react';

export function Overlay({ overlayRef, onClick }: { overlayRef: any; onClick?: () => void }) {
  return (
    <div
      ref={overlayRef}
      onClick={onClick}
      className="fixed left-0 top-0 z-10 w-screen transition-all duration-500 lg:hidden [&.active]:h-screen [&.active]:bg-black/40"
    />
  );
}
