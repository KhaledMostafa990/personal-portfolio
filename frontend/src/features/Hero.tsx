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
      <figure className="relative h-auto w-full">
        <Image
          className="lg:max-[1110px] md:hidden lg:block lg:max-h-[600px]"
          src={image}
          alt="A personal project"
        />
        <Image className="hidden md:block lg:hidden" src={imageTablet} alt="A personal project" />
      </figure>

      {/* Hero Content */}
      <div
        className="flex flex-col gap-8
      md:absolute md:bottom-0 md:bg-background-default md:pt-8 md:pr-8
      lg:pr-20"
      >
        <h1
          className=" max-w-md text-4xl text-dark-grey 
          lg:max-w-[310px] lg:text-5xl"
        >
          {heading}
        </h1>
        <PrimaryButton withIcon classes="max-w-fit">
          {ctaText}
        </PrimaryButton>
      </div>
    </>
  );
}
