import projectMainImage from 'public/images/portfolio/desktop/image-portfolio-manage.jpg';
import projectMain2Image from 'public/images/portfolio/desktop/image-portfolio-bookmark.jpg';
import projectHeroImage from 'public/images/detail/desktop/image-manage-hero.jpg';
import projectHero2Image from 'public/images/detail/desktop/image-bookmark-hero.jpg';
import projectPreview1Image from 'public/images/detail/desktop/image-manage-preview-1.jpg';
import project2Preview1Image from 'public/images/detail/desktop/image-bookmark-preview-1.jpg';
import project2Preview2Image from 'public/images/detail/desktop/image-bookmark-preview-2.jpg';
import projectPreview2Image from 'public/images/detail/desktop/image-manage-preview-2.jpg';

// Projects Mock Data (in case server is not available)
export const projectsMockData = [
  {
    id: '1',
    name: 'Manage 1',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    mainImageUrls: [projectMainImage],
    heroImageUrls: [projectHeroImage],
    showcaseImagesUrls: [projectPreview1Image, projectPreview2Image],
    aboutProject:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider. This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    demo: 'https://www.google.com',
    type: ['Interaction Design', 'Frontend Development'],
    technologies: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'Postgres'],
    nextProject: {
      id: 2,
      name: 'BookMark 2',
    },
    previousProject: {
      id: 3,
      name: 'Manage 3',
    },
  },
  {
    id: '2',
    name: 'Bookmark 2',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    mainImageUrls: [projectMain2Image],
    heroImageUrls: [projectHero2Image],
    showcaseImagesUrls: [project2Preview1Image, project2Preview2Image],
    aboutProject:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider. This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    demo: 'https://www.google.com',
    type: ['Interaction Design', 'Frontend Development'],
    technologies: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'Postgres'],
    nextProject: {
      id: 3,
      name: 'Manage 3',
    },
    previousProject: {
      id: 1,
      name: 'Manage 1',
    },
  },
  {
    id: '3',
    name: 'Project 3',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    mainImageUrls: [projectMainImage],
    heroImageUrls: [projectHeroImage],
    showcaseImagesUrls: [projectPreview1Image, projectPreview2Image],
    aboutProject:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider. This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    demo: 'https://www.google.com',
    type: ['Interaction Design', 'Frontend Development'],
    technologies: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'Postgres'],
    nextProject: {
      id: 1,
      name: 'Manage 1',
    },
    previousProject: {
      id: 2,
      name: 'Bookmark 2',
    },
  },
];
