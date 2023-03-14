import Image from 'next/image';
import { SecondaryButton } from '@/components/base';

interface AboutMeProps {
  heading: string;
  projectsCtaText: string;
  description: string;
  image: any;
  imageTablet: any;
}

export default function AboutMe({ data }: { data: AboutMeProps }) {
  const { heading, projectsCtaText, description, image } = data;

  return (
    <>
      {/* hero image */}
      <figure className="relative h-auto w-full md:overflow-hidden">
        <Image
          className="h-auto max-h-[600px] max-w-full md:min-w-[540px]  md:translate-x-[-30%] lg:translate-x-0"
          src={image}
          alt="A personal project"
        />
      </figure>

      {/* Hero Content */}
      <div className="flex flex-col gap-6 border-y border-light-grey pb-10 md:pb-0 xl:pr-16">
        <h2 className="max-w-md py-10 text-4xl text-dark-grey lg:max-w-[310px]">{heading}</h2>
        <p className="max-w-lg text-dark-grey">{description}</p>
        <SecondaryButton classes="max-w-fit">{projectsCtaText}</SecondaryButton>
      </div>
    </>
  );
}
