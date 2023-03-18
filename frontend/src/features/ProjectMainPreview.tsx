import Image from 'next/image';
import { SecondaryButton } from '@/components/base';
import Link from 'next/link';
import { Project } from '@/store/server/projects';

export default function ProjectMainPreview({ data }: { data: Project }) {
  const { id, name, description, mainImageUrls } = data;

  return (
    <>
      {/* hero image */}
      <figure className="relative flex h-auto justify-center md:flex-1 md:justify-start">
        <Image
          className="h-auto max-h-[540px] w-full max-w-[500px]"
          src={mainImageUrls[0]}
          width={500}
          height={540}
          priority
          alt="A personal project"
        />
      </figure>

      {/* Hero Content */}
      <div className="flex flex-col gap-8 border-y border-light-grey md:h-full md:flex-1 md:self-start">
        <h2 className="max-w-md pt-8 text-4xl text-dark-grey lg:max-w-[310px]">{name}</h2>
        <p className="max-w-lg text-dark-grey md:max-w-xs">{description}</p>
        <Link href={`/portfolio/${id}`}>
          <SecondaryButton classes="max-w-fit">View Project</SecondaryButton>
        </Link>
      </div>
    </>
  );
}
