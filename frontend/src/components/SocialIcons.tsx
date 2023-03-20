'use client';

// import { GlobalData } from '@/store/client/globalData';
// import { useSelector } from 'react-redux';
import { globalClientStaticData } from '@/store/client/ConstantData';
import Link from 'next/link';

export function SocialIcons({ onLight }: { onLight?: boolean }) {
  // const { socialMediaIcons } = useSelector(
  //     ({ globalData }: { globalData: GlobalData }) => globalData,
  //   );
  const { socialMediaIcons } = globalClientStaticData;
  return (
    <div className="flex items-center justify-center md:justify-end">
      <ul className="flex gap-4 xl:gap-6">
        {socialMediaIcons.map((icon: any) => (
          <li key={icon.altText}>
            <Link href={icon.link}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
                <path fill={`${onLight ? '#000' : '#fff'}`} d={`${icon.iconDemination}`} />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
