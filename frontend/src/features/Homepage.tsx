'use client';

import { Section, Row } from '@/components/layout';
import Hero, { HeroProps } from '@/features/Hero';
import AboutMe, { AboutMeProps } from '@/features/AboutMe';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage({
  heroData,
  aboutMeData,
}: {
  heroData: HeroProps;
  aboutMeData: AboutMeProps;
}) {
  useHomeAnimations();

  return (
    <div className={`flex flex-col gap-60`}>
      <Section gridContainer className={'hero'}>
        <Row className="lg:flex lg:justify-center">
          <Hero data={heroData} />
        </Row>
      </Section>

      <Section gridContainer id={'about-me'} className={'about-me'}>
        <Row className="flex flex-col gap-8 md:flex-row">
          <AboutMe data={aboutMeData} />
        </Row>
      </Section>
    </div>
  );
}

function useHomeAnimations() {
  useEffect(() => {
    const animteONmedia = gsap.matchMedia();
    animteONmedia.add(
      {
        mob: '(max-width: 767px)',
      },
      (context) => {
        const heroTriggerValues = {
          trigger: '.hero',
          pin: true,
          pinSpacing: 'margin',
          start: 'top 144px',
          end: 'bottom 56%',
        };

        if (!context?.conditions?.mob) {
          gsap.to('.hero', {
            scrollTrigger: {
              ...heroTriggerValues,
            },
          });
        } else {
          gsap.to('.hero', {
            scrollTrigger: {
              ...heroTriggerValues,
              pinSpacing: false,
            },
          });
        }
      },
    );

    gsap.to('.about-me', {
      scrollTrigger: {
        trigger: '.about-me',
        pin: true,
        start: 'top 20%',
        end: '+=200px 40%',
        pinSpacing: 'margin',
      },
    });

    gsap.to('.about-me figure', {
      scrollTrigger: {
        trigger: '.about-me figure',
        start: 'center 55%',
        toggleActions: 'play resume complete reverse',
      },
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'back.out',
    });

    gsap.to('.about-content', {
      scrollTrigger: {
        trigger: '.about-me figure',
        start: 'center 55%',
        toggleActions: 'play resume complete reverse',
      },
      y: 0,
      delay: 0.25,
      duration: 0.5,
      ease: 'back.out',
    });
  }, []);
}
