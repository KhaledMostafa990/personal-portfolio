'use client';

import Link from 'next/link';

import { useSelector } from 'react-redux';
import { GlobalData } from '@/store/client/globalData';

import { Logo, SecondaryButton } from '@/components/base';
import { NavBar, Section, Row } from '@/components/layout';
import { SocialIcons } from '../components/SocialIcons';

export default function Footer() {
  const { navListItems, contactHeading, contactCtaText } = useSelector(
    ({ globalData }: { globalData: GlobalData }) => globalData,
  );

  return (
    <>
      <footer className="mt-20 flex flex-col gap-20 md:mt-40 md:gap-40">
        <Section gridContainer>
          <Row className="flex flex-col gap-16">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
              <h3 className=" min-w-[320px] max-w-xs  pb-10 text-center text-4xl text-dark-grey md:flex-1 md:pb-0">
                {contactHeading}
              </h3>

              <hr className="hidden border border-light-grey md:block md:flex-1" />

              <Link className="md:min-w-fit" href={'/contact-me'}>
                <SecondaryButton classes="">{contactCtaText}</SecondaryButton>
              </Link>
            </div>
          </Row>
        </Section>

        <Section gridContainer className="bg-dark-grey py-14 md:py-5">
          <Row className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-0">
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
              <Link href={'/'}>
                <Logo onLight={false} />
              </Link>

              <NavBar withMenu={false} navListItems={navListItems} />
            </div>

            <SocialIcons />
          </Row>
        </Section>
      </footer>
    </>
  );
}
