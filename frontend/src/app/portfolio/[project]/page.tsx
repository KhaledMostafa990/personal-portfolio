'use clirent';

import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';

import { SecondaryButton } from '@/components/base';
import { Row, Section } from '@/components/layout';
import { projectsData } from '@/store/client/mockData';

export default function Page({ params }: { params: { project: string } }) {
  const { project: projectId } = params;
  return (
    <>
      {projectsData
        .filter((project) => `${project.id}` === projectId)
        .map(
          ({ name, description, demo, heroImage, showcaseImagesUrls, builtWith, aboutProject }) => (
            <>
              <Section gridContainer className="lg:translate-y-20">
                <Row className="flex min-h-fit flex-col gap-8  lg:flex-row lg:flex-wrap lg:justify-between">
                  <Section>
                    <Row className="">
                      {/* hero image */}
                      <figure className="relative flex h-auto w-full justify-center md:max-w-fit md:flex-1 md:justify-start">
                        <Image
                          className="h-auto max-h-[500px] min-w-full max-w-[1110px]"
                          src={heroImage}
                          alt="A personal project"
                        />
                      </figure>
                    </Row>
                  </Section>

                  <Section className="lg:max-w-fit">
                    <Row className="">
                      {/* Hero Content */}
                      <div className="flex flex-col gap-8 border-y border-light-grey py-8 md:h-full md:gap-5 md:self-start md:py-12 lg:max-w-sm">
                        <h2 className="py-2 text-4xl text-dark-grey">{name}</h2>

                        <p className="max-w-lg text-dark-grey md:absolute md:right-0 md:max-w-xs lg:static">
                          {description}
                        </p>

                        <p className="h-full max-w-[250px] text-primary-default">
                          <span>{builtWith.join(' / ')}</span>
                        </p>

                        <Link href={`/${demo}`}>
                          <SecondaryButton classes="max-w-fit">View Project</SecondaryButton>
                        </Link>
                      </div>
                    </Row>
                  </Section>

                  <Section>
                    <Row>
                      {/* Hero Content */}
                      <div className="flex flex-col gap-8 py-8 md:h-full md:gap-5 md:py-12 lg:gap-12">
                        <h2 className="py-2 text-4xl text-dark-grey">Project Background</h2>

                        <p className="max-w-lg text-dark-grey md:max-w-2xl">{aboutProject}</p>

                        <h3 className="py-2 text-3xl text-dark-grey md:self-center">
                          Static Preview
                        </h3>

                        {/* hero image */}
                        {showcaseImagesUrls.map((image, idx) => (
                          <figure
                            key={idx}
                            className="relative flex h-auto w-full justify-center md:max-w-fit md:flex-1 md:self-center"
                          >
                            <Image
                              className="h-auto max-h-[400px] min-w-full max-w-[635px]"
                              src={image}
                              alt="A personal project"
                            />
                          </figure>
                        ))}
                      </div>
                    </Row>
                  </Section>
                </Row>
              </Section>
            </>
          ),
        )}
    </>
  );
}
export async function generateMetadata({
  params,
}: {
  params: { project: string };
}): Promise<Metadata> {
  const { project: projectId } = params;

  const project = projectsData.find((p) => `${p.id}` === projectId);

  return {
    title: project?.name,
    description: project?.description,
  };
}
