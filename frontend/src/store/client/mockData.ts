import logoIcon from 'public/images/logo.svg';
import linkedinSvg from 'public/images/icons/linkedin.svg';
import facebookSvg from 'public/images/icons/facebook.svg';
import twitterSvg from 'public/images/icons/twitter.svg';
import githubSvg from 'public/images/icons/github.svg';
import youtubeSvg from 'public/images/icons/youtube.svg';

import projectMainImage from 'public/images/portfolio/desktop/image-portfolio-manage.jpg';
import projectMain2Image from 'public/images/portfolio/desktop/image-portfolio-bookmark.jpg';
import projectHeroImage from 'public/images/detail/desktop/image-manage-hero.jpg';
import projectHero2Image from 'public/images/detail/desktop/image-bookmark-hero.jpg';
import projectPreview1Image from 'public/images/detail/desktop/image-manage-preview-1.jpg';
import project2Preview1Image from 'public/images/detail/desktop/image-bookmark-preview-1.jpg';
import project2Preview2Image from 'public/images/detail/desktop/image-bookmark-preview-2.jpg';
import projectPreview2Image from 'public/images/detail/desktop/image-manage-preview-2.jpg';

// Projects Data
export const projectsData = [
  {
    id: 1,
    name: 'Manage 1',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    mainImage: projectMainImage,
    heroImage: projectHeroImage,
    showcaseImagesUrls: [projectPreview1Image, projectPreview2Image],
    aboutProject:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider. This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    demo: 'https://www.google.com',
    builtWith: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'Postgres'],
    next: {
      id: 2,
      name: 'BookMark 2',
    },
    prev: {
      id: 3,
      name: 'Manage 3',
    },
  },
  {
    id: 2,
    name: 'Bookmark 2',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    mainImage: projectMain2Image,
    heroImage: projectHero2Image,
    showcaseImagesUrls: [project2Preview1Image, project2Preview2Image],
    aboutProject:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider. This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    demo: 'https://www.google.com',
    builtWith: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'Postgres'],
    next: {
      id: 3,
      name: 'Manage 3',
    },
    prev: {
      id: 1,
      name: 'Manage 1',
    },
  },
  {
    id: 3,
    name: 'Project 3',
    description:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    mainImage: projectMainImage,
    heroImage: projectHeroImage,
    showcaseImagesUrls: [projectPreview1Image, projectPreview2Image],
    aboutProject:
      'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider. This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
    demo: 'https://www.google.com',
    builtWith: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'Postgres'],
    next: {
      id: 1,
      name: 'Manage 1',
    },
    prev: {
      id: 2,
      name: 'Bookmark 2',
    },
  },
];

export const globalDataState = {
  socialMediaIcons: [
    {
      iconSrc: linkedinSvg,
      altText: 'pinterest',
      link: 'https://www.pinterest.com/',
    },
    {
      iconSrc: facebookSvg,
      altText: 'facebook',
      link: 'https://www.facebook.com/',
    },
    {
      iconSrc: twitterSvg,
      altText: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      iconSrc: githubSvg,
      altText: 'instagram',
      link: 'https://www.instagram.com/',
    },
    {
      iconSrc: youtubeSvg,
      altText: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ],
  navListItems: ['Home', 'Portfolio', 'Contact Me'],
  logoSrc: logoIcon,
  contactCtaText: 'Contact Me',
  contactHeading: 'Interested in doing a project together?',
  projectsData,
};
