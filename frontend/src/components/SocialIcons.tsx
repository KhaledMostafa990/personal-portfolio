'use client';

import { GlobalData } from '@/store/client/globalData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

export function SocialIcons() {
  const { socialMediaIcons } = useSelector(
    ({ globalData }: { globalData: GlobalData }) => globalData,
  );

  return (
    <div className="flex items-center justify-center md:justify-end">
      <ul className="flex gap-5 xl:gap-8">
        {socialMediaIcons.map((icon: any) => (
          <li key={icon.altText}>
            <Link href={icon.link}>
              <Image src={icon.iconSrc} alt={icon.altText} priority />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
