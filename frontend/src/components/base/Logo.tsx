import React from 'react';

export function Logo({ onLight }: { onLight?: boolean }) {
  return (
    <>
      <div className={`flex items-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
          <path
            fill={` ${onLight ? '#33323D' : '#fff'}`}
            fill-rule="evenodd"
            d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
          />
        </svg>
        {/* sr-only logo text link */}
        <span className="sr-only">Alex Spencer logo</span>
      </div>
    </>
  );
}
