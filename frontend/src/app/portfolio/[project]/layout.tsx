import { Row, Section } from '@/components/layout';
import { projectsData } from '@/store/client/mockData';
import Link from 'next/link';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { project: string };
}) {
  const { project: projectId } = params;
  const project = projectsData.find((p) => `${p.id}` === projectId);
  return (
    <>
      {children}

      <Section gridContainer>
        <Row className="flex items-center justify-between">
          <Link
            href={`/portfolio/${project?.prev.id}`}
            className="flex w-full flex-col  gap-4 border-y-2 border-r-2 border-light-grey py-7 pl-2 md:pl-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
              <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8" />
            </svg>
            <button className="flex flex-col gap-2">
              <span className="text-3xl text-dark-grey">{project?.prev.name}</span>
              <span className="text-xl text-dark-grey/70">Prev Project</span>
            </button>
          </Link>

          <Link
            href={`/portfolio/${project?.next.id}`}
            className="flex w-full flex-col items-end gap-4 border-y-2 border-l-2 border-light-grey py-7 pr-2 md:pr-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
              <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8" />
            </svg>
            <button className="flex flex-col items-end gap-2">
              <span className=" text-3xl text-dark-grey">{project?.next.name}</span>
              <span className="text-xl text-dark-grey/70">Next Project</span>
            </button>
          </Link>
        </Row>
      </Section>
    </>
  );
}
