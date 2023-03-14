import Image from 'next/image';
import { SecondaryButton } from '@/components/base';
import Link from 'next/link';

interface HeroProps {
  id: string;
  name: string;
  description: string;
  ctaText: string;
  image: any;
}

export default function ProjectMainPreview({ data }: { data: HeroProps }) {
  const { id, name, description, ctaText, image } = data;

  return (
    <>
      {/* hero image */}
      <figure className="relative flex h-auto w-full justify-center md:max-w-fit md:flex-1 md:justify-start">
        <Image
          className="h-auto max-h-[540px] w-[500px] max-w-[500px]"
          src={image}
          alt="A personal project"
        />
      </figure>

      {/* Hero Content */}
      <div className="flex flex-col gap-8 border-y border-light-grey md:h-full md:self-start">
        <h2 className="max-w-md pt-8 text-4xl text-dark-grey lg:max-w-[310px]">{name}</h2>
        <p className="max-w-lg text-dark-grey md:max-w-xs">{description}</p>
        <Link href={`/portfolio/${id}`}>
          <SecondaryButton classes="max-w-fit">{ctaText}</SecondaryButton>
        </Link>
      </div>
    </>
  );
}
