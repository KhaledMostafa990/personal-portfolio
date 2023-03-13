'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useSelector } from 'react-redux';
import { GlobalData } from '@/store/client/globalData';

import { Logo } from '@/components/base';
import { NavBar, Section, Row } from '@/components/layout';

export default function Footer() {
  const { navListItems, socialMediaIcons } = useSelector(
    ({ globalData }: { globalData: GlobalData }) => globalData,
  );

  return (
    <footer className="mt-20 lg-mt-40">
      <Section gridContainer className="bg-dark-grey py-14 md:py-5">
        <Row className="flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 justify-center items-center md:flex-row">
            <Link href={'/'}>
              <Logo onLight={false} />
            </Link>

            <NavBar withMenu={false} navListItems={navListItems} />
          </div>

          <div className="flex justify-center items-center md:justify-end">
            <ul className="flex gap-5 xl:gap-8">
              {socialMediaIcons.map((icon) => (
                <li key={icon.altText}>
                  <Link href={icon.link}>
                    <Image src={icon.iconSrc} alt={icon.altText} priority />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Row>
      </Section>
    </footer>
  );
}
