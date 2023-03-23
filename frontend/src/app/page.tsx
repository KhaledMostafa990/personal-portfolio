import heroImage from 'public/images/homepage/desktop/image-homepage-hero.jpg';
import heroImageTablet from 'public/images/homepage/tablet/image-homepage-hero.jpg';

import profileImage from 'public/images/homepage/desktop/image-homepage-profile.jpg';
import profileImageTablet from 'public/images/homepage/tablet/image-homepage-profile.jpg';

import { baseUrl } from '@/config/apis';
import { getMainInfo, MainInfo } from '@/store/server/mainData';

import Homepage from '@/features/Homepage';
import { HeroProps } from '@/features/Hero';
import { AboutMeProps } from '@/features/AboutMe';

export default async function Home() {
  let mainData: MainInfo | null = null;
  let heroData: HeroProps | null = null;
  let aboutMeData: AboutMeProps | null = null;

  ({ mainData, heroData, aboutMeData } = await getHomeData(mainData, heroData, aboutMeData));

  return <Homepage heroData={heroData} aboutMeData={aboutMeData} />;
}

async function getHomeData(
  mainData: MainInfo | null,
  heroData: HeroProps | null,
  aboutMeData: AboutMeProps | null,
) {
  mainData = await getMainInfo();

  if (mainData) {
    // console.log('server data...', mainData);
    // filter desktop and tablet image function
    const filteredImage = (images: string[], targetSize: number) => {
      // eslint-disable-next-line no-nested-ternary
      targetSize = targetSize === 3 ? 3 : targetSize === 2 ? 2 : 1;
      const filtered = images.filter(
        (img: string) => img.charAt(img.length - 6) === `${targetSize}`,
      )[0];
      return filtered;
    };

    heroData = {
      ...heroMockData,
      heading: mainData.heroTitle,
      image: `${baseUrl}/${filteredImage(mainData.heroImageUrls, 3)}`,
      imageTablet: `${baseUrl}/${filteredImage(mainData.heroImageUrls, 2)}`,
    };
    aboutMeData = {
      ...aboutMockData,
      description: mainData.aboutMe,
      image: `${baseUrl}/${filteredImage(mainData.personalImageUrls, 3)}`,
      imageTablet: `${baseUrl}/${filteredImage(mainData.personalImageUrls, 2)}`,
    };
  } else {
    // console.log('client data...');
    heroData = heroMockData;
    aboutMeData = aboutMockData;
  }
  return { mainData, heroData, aboutMeData };
}

// Hero Mock data example (in case server is not available)
const heroMockData = {
  heading: 'Hey, I’m Alex Spencer and I love building beautiful websites',
  ctaText: 'About ME',
  image: heroImage,
  imageTablet: heroImageTablet,
};

// About Mock data example (in case server is not available)
const aboutMockData = {
  heading: 'About Me',
  projectsCtaText: 'Go To Portfolio',
  description:
    'I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.',
  image: profileImage,
  imageTablet: profileImageTablet,
};
