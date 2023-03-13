import Image from 'next/image';
import { PrimaryButton } from '@/components/base';

interface HeroProps {
  heading: string;
  ctaText: string;
  image: any;
  imageTablet: any;
}

export default function Hero({ data }: { data: HeroProps }) {
  const { heading, ctaText, image, imageTablet } = data;

  return (
    <>
      {/* hero image */}
      <figure className="relative w-full h-auto">
        <Image
          className="md:hidden lg:block lg:max-[1110px] lg:max-h-[600px]"
          src={image}
          alt="A personal project"
        />
        <Image className="hidden md:block lg:hidden" src={imageTablet} alt="A personal project" />
      </figure>

      {/* Hero Content */}
      <div
        className="flex flex-col gap-8
      md:absolute md:bottom-0 md:pt-8 md:pr-8 md:bg-background-default
      lg:pr-20"
      >
        <h1
          className=" max-w-md text-4xl text-dark-grey 
          lg:text-5xl lg:max-w-[310px]"
        >
          {heading}
        </h1>
        <PrimaryButton classes="max-w-fit">{ctaText}</PrimaryButton>
      </div>
    </>
  );
}
