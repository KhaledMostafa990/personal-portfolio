import Image from 'next/image';
import { SecondaryButton } from '@/components/base';
import Link from 'next/link';

export interface AboutMeProps {
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
      <figure className="relative h-auto w-full translate-x-[100%] md:translate-y-[20%] md:translate-x-[40%] md:overflow-hidden lg:translate-x-[40%]">
        <Image
          width={540}
          height={600}
          className="h-auto max-h-[600px] max-w-full md:min-w-[540px]  md:translate-x-[-30%] lg:translate-x-0"
          src={image}
          alt="A personal project"
        />
      </figure>

      {/* Hero Content */}
      <div className="about-content flex translate-y-[100%] flex-col gap-6 border-y border-light-grey pb-10 md:pb-0 xl:pr-16">
        <h2 className="max-w-md py-10 text-4xl text-dark-grey lg:max-w-[310px]">{heading}</h2>
        <p className="max-w-lg text-dark-grey">{description}</p>
        <Link href="/portfolio">
          <SecondaryButton classes="max-w-fit">{projectsCtaText}</SecondaryButton>
        </Link>
      </div>
    </>
  );
}
