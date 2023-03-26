'use client';

import { Section, Row } from '@/components/layout';
import Hero, { HeroProps } from '@/features/Hero';
import AboutMe, { AboutMeProps } from '@/features/AboutMe';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useAnimationEffect } from '@/utils';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage({
  heroData,
  aboutMeData,
}: {
  heroData: HeroProps;
  aboutMeData: AboutMeProps;
}) {
  useAnimationEffect({
    target: '.hero',
    scrollTriggerElement: '.hero',
    scrollOptions: {
      pin: true,
      pinSpacing: false,
      start: 'top 144px',
      end: 'bottom 56%',
    },
  });

  useAnimationEffect({
    target: '.hero',
    scrollTriggerElement: '.hero',
    media: '(min-width: 1440px)',
    scrollOptions: {
      pin: true,
      start: '46% 144px',
      end: '+=200px top',
      pinSpacing: false,
    },
  });

  useAnimationEffect({
    target: '.hero',
    scrollTriggerElement: '.hero',
    media: '(min-width: 300px)',
    scrollOptions: {
      pin: true,
      start: '35% 144px',
      end: '+=200px top',
      pinSpacing: false,
    },
  });

  useAnimationEffect({
    target: '.about-me',
    scrollTriggerElement: '.about-me',
    scrollOptions: {
      pin: true,
      start: 'top 50%',
      end: '+=300px 55%',
      pinSpacing: 'margin',
    },
  });

  useAnimationEffect({
    target: '.about-me',
    scrollTriggerElement: '.about-me',
    scrollOptions: {
      pin: true,
      start: 'top 16%',
      end: '+=300px top',
      pinSpacing: 'margin',
    },
  });

  useAnimationEffect({
    target: '.about-me figure',
    scrollTriggerElement: '.about-me figure',
    scrollOptions: {
      start: 'center 55%',
      toggleActions: 'play resume complete reverse',
    },
    animationOptions: {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'bower2',
    },
  });

  useAnimationEffect({
    target: '.about-content',
    scrollTriggerElement: '.about-me figure',
    scrollOptions: {
      start: 'center 46%',
      toggleActions: 'play resume complete reverse',
    },
    animationOptions: {
      y: 0,
      delay: 0.25,
      duration: 0.6,
      ease: 'bower2',
    },
  });

  return (
    <div className={`flex flex-col gap-72`}>
      <Section gridContainer className={'hero'}>
        <Row className="lg:flex lg:justify-center">
          <Hero data={heroData} />
        </Row>
      </Section>

      <Section gridContainer id={'about-me'} className={'about-me'}>
        <Row className="flex flex-col gap-8 md:flex-row xl:pt-24">
          <AboutMe data={aboutMeData} />
        </Row>
      </Section>
    </div>
  );
}
