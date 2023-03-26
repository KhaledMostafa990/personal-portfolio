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
  useAnimationEffect({
    target: '.hero',
    scrollTriggerElement: '.hero',
    scrollOptions: {
      pin: true,
      pinSpacing: 'margin',
      start: 'top 144px',
      end: 'bottom 56%',
    },
    media: [
      {
        size: 'mobile',
        animationsEffect: {
          scrollOptions: {
            pinSpacing: false,
          },
        },
      },
    ],
  });

  useAnimationEffect({
    target: '.about-me',
    scrollTriggerElement: '.about-me',
    scrollOptions: {
      pin: true,
      start: 'top 20%',
      end: '+=200px 40%',
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
      start: 'center 55%',
      toggleActions: 'play resume complete reverse',
    },
    animationOptions: {
      y: 0,
      delay: 0.25,
      duration: 0.7,
      ease: 'bower2',
    },
  });
}
