import heroImage from 'public/images/homepage/desktop/image-homepage-hero.jpg';
import heroImageTablet from 'public/images/homepage/tablet/image-homepage-hero.jpg';

import profileImage from 'public/images/homepage/desktop/image-homepage-profile.jpg';
import profileImageTablet from 'public/images/homepage/tablet/image-homepage-profile.jpg';

import { Section, Row } from '@/components/layout';

import Hero from '@/features/Hero';
import AboutMe from '@/features/AboutMe';

export default function Home() {
  return (
    <>
      <Section gridContainer>
        <Row className="flex flex-col gap-5">
          <Hero data={heroData} />
        </Row>
      </Section>

      <Section gridContainer>
        <Row className="flex flex-col gap-8 md:flex-row">
          <AboutMe data={aboutData} />
        </Row>
      </Section>
    </>
  );
}

// Hero Mock data example
const heroData = {
  heading: 'Hey, I’m Alex Spencer and I love building beautiful websites',
  ctaText: 'About ME',
  image: heroImage,
  imageTablet: heroImageTablet,
};

// About Mock data example
const aboutData = {
  heading: 'About Me',
  projectsCtaText: 'Go To Portfolio',
  description:
    'I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.',
  image: profileImage,
  imageTablet: profileImageTablet,
};
