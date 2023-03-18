import { baseUrl } from '@/config/apis';
import { projectsMockData } from '@/store/client/projectsMockData';
import { getProjects, Project } from '@/store/server/projects';

import ProjectMainPreview from '@/features/ProjectMainPreview';
import { Section, Row } from '@/components/layout';

export const metadata = {
  title: 'Portfolio',
  description: 'Projects I have worked on and am currently working on.',
};

export default async function Portfolio() {
  let projects: Project[] | null = null;

  projects = await getProjectsData(projects);

  return (
    <>
      {projects?.map((project, index) => (
        <Section key={project.name} gridContainer>
          <Row
            className={`flex flex-col gap-10 md:min-h-[400px] md:items-center lg:gap-24 ${
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

export async function getProjectsData(projects: Project[] | null) {
  projects = await getProjects();

  if (projects && projects.length > 0) {
    // console.log('server data...', projects);
    return projects.map((project) => {
      return {
        ...project,
        heroImageUrls: project.heroImageUrls.map((url) => `${baseUrl}/${url}`),
        mainImageUrls: project.mainImageUrls.map((url) => `${baseUrl}/${url}`),
        showcaseImagesUrls: project.showcaseImagesUrls.map((url) => `${baseUrl}/${url}`),
      };
    });
  }

  // console.log('client data...');
  projects = projectsMockData;
  return projects;
}
