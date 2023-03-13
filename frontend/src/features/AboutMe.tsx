import Image from 'next/image';
import { SecondaryButton } from '@/components/base';

interface AboutMeProps {
  heading: string;
  projectsCtaText: string;
  contactCtaText: string;
  description: string;
  image: any;
  imageTablet: any;
}

export default function AboutMe({ data }: { data: AboutMeProps }) {
  const { heading, projectsCtaText, description, image } = data;

  return (
    <>
      {/* hero image */}
      <figure className="relative w-full h-auto md:overflow-hidden">
        <Image
          className="max-w-full h-auto max-h-[600px] md:min-w-[540px]  md:translate-x-[-30%] lg:translate-x-0"
          src={image}
          alt="A personal project"
        />
      </figure>

      {/* Hero Content */}
      <div className="flex flex-col gap-6 border-y border-light-grey pb-10 md:pb-0 xl:pr-16">
        <h1 className="py-10 max-w-md text-4xl text-dark-grey lg:max-w-[310px]">{heading}</h1>
        <p className="max-w-lg text-dark-grey">{description}</p>
        <SecondaryButton classes="max-w-fit">{projectsCtaText}</SecondaryButton>
      </div>
    </>
  );
}
