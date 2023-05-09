'use client';

import Link from 'next/link';
import Image from 'next/image';

import { SecondaryButton } from '@/components/base';
import { Project } from '@/store/server/projects';

export default function ProjectMainPreview({ data }: { data: Project }) {
  const { id, name, description, mainImageUrls } = data;

  return (
    <>
      {/* hero image */}
      <figure className="project-image relative flex h-auto translate-y-56 scale-90 justify-center opacity-0 md:flex-1 md:justify-start">
        <Image
          className=" h-auto max-h-[540px] w-full max-w-[500px]"
          src={mainImageUrls[0]}
          width={500}
          height={540}
          priority
          alt="A personal project"
        />
      </figure>

      {/* Hero Content */}
      <div className="flex flex-col gap-8 border-y border-light-grey md:h-full md:flex-1 md:self-start">
        <h2 className="project-info-item max-w-md translate-y-56 pt-8 text-4xl text-dark-grey opacity-0 lg:max-w-[310px]">
          {name}
        </h2>
        <p className="project-info-item max-w-lg translate-y-56 text-dark-grey opacity-0 md:max-w-xs">
          {description}
        </p>
        <Link className="project-info-item translate-y-56 opacity-0" href={`/portfolio/${id}`}>
          <SecondaryButton classes="max-w-fit">View Project</SecondaryButton>
        </Link>
      </div>
    </>
  );
}
