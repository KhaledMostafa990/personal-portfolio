'use client';

import Image from 'next/image';
import { PrimaryButton } from '@/components/base';
import { scrollIntoView } from '@/utils/scrollIntoView';

export interface HeroProps {
  heading: string;
  ctaText: string;
  image: any;
  imageTablet: any;
}

export default function Hero({ data }: { data: HeroProps }) {
  const { heading, ctaText, image, imageTablet } = data;

  const handleCtaClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const sectionName = event.currentTarget.getAttribute('href')?.slice(1);
    const section = document.getElementById(sectionName || '');
    if (section) scrollIntoView(section, 'center');
  };

  return (
    <div className="flex flex-col gap-5 ">
      {/* hero image */}
      <figure id="hero-image" className="relative h-auto w-full">
        <Image
          width={1110}
          height={600}
          className="md:hidden lg:block lg:max-h-[600px] lg:max-w-[900px] 2xl:max-w-[1110px]"
          src={image}
          alt="A personal project"
        />
        <Image
          width={1110}
          height={600}
          className="hidden md:block lg:hidden"
          src={imageTablet}
          alt="A personal project"
        />
      </figure>

      {/* Hero Content */}
      <div
        className=" flex flex-col gap-8
      md:absolute md:bottom-0 md:bg-background-default md:pt-8 md:pr-8
      lg:pr-20"
      >
        <h1
          id="hero-heading"
          className=" max-w-md text-4xl text-dark-grey 
          lg:max-w-[310px] lg:text-5xl"
        >
          {heading}
        </h1>

        <a href="#about-me" onClick={handleCtaClick}>
          <PrimaryButton withIcon classes="max-w-fit">
            {ctaText}
          </PrimaryButton>
        </a>
      </div>
    </div>
  );
}
