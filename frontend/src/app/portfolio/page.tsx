import { Section, Row } from '@/components/layout';

import ProjectMainPreview from '@/features/ProjectMainPreview';
import { projectsData } from '@/store/client/mockData';

export const metadata = {
  title: 'Portfolio',
  description: 'Projects I have worked on and am currently working on.',
};

export default function Portfolio() {
  return (
    <>
      {projectsData.map((project, index) => (
        <Section key={project.name} gridContainer>
          <Row
            className={`flex flex-col gap-8 md:min-h-[400px] md:items-center md:gap-24 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <ProjectMainPreview data={project} />
          </Row>
        </Section>
      ))}
    </>
  );
}
