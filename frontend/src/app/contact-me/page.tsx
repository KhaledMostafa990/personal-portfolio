import heroImage from 'public/images/homepage/desktop/image-homepage-hero.jpg';
import heroImageTablet from 'public/images/homepage/tablet/image-homepage-hero.jpg';

import { Section, Row } from '@/components/layout';

import Hero from '@/features/Hero';

export const metadata = {
  title: 'Contact',
  description: 'Contact Alex Spencer',
};

export default function Home() {
  return (
    <>
      <Section gridContainer>
        <Row className="flex flex-col gap-5">
          {/* Todo: Contact */}
          <Hero data={heroData} />
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
