import manageImage from 'public/images/portfolio/desktop/image-portfolio-manage.jpg';
import bookmarkImage from 'public/images/portfolio/desktop/image-portfolio-bookmark.jpg';

import { Section, Row } from '@/components/layout';

import ProjectMainPreview from '@/features/ProjectMainPreview';

export const metadata = {
  title: 'Portfolio',
  description: 'Projects I have worked on and am currently working on.',
};

export default function Portfolio() {
  return (
    <>
      {projectPreviewData.map((project, index) => (
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

// Project preview Mock data example
const projectPreviewData = [
  {
    id: 'Manage',
    name: 'Manage',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    ctaText: 'View Project',
    image: manageImage,
  },
  {
    id: 'Bookmark',
    name: 'Bookmark',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    ctaText: 'View Project',
    image: bookmarkImage,
  },
  {
    id: 'Manage',
    name: 'Manage',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    ctaText: 'View Project',
    image: manageImage,
  },
  {
    id: 'Bookmark',
    name: 'Bookmark',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    ctaText: 'View Project',
    image: bookmarkImage,
  },
];
