'use client';

import { Section, Row } from '@/components/layout';

import { gsap } from 'gsap';
import { Project } from '@/store/server/projects';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import ProjectMainPreview from './ProjectMainPreview';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage({ projects }: { projects: Project[] }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    projects.forEach((p) => {
      const projectName = p.name.split(' ').join('');

      const scrollTriggerOpt = {
        start: `top 144px`,
        toggleActions: 'play resume complete reverse',
      } satisfies ScrollTrigger.Vars;

      const infoElements = document.querySelectorAll(`.project-${projectName} .project-info-item`);
      const mainImg = document.querySelector(`.project-${projectName} .project-image`);

      gsap.to(`.project-${projectName}`, {
        scrollTrigger: {
          ...scrollTriggerOpt,
          end: '+=700px top',
          trigger: `.project-${projectName}`,
          pin: true,
        },
      });

      gsap.to(infoElements, {
        opacity: 100,
        y: 0,
        scrollTrigger: {
          ...scrollTriggerOpt,
          start: `top 400px`,
          trigger: `.project-${projectName}`,
        },
        duration: 0.44,
        ease: 'power2',
        stagger: 0.3,
      });

      gsap.to(mainImg, {
        scrollTrigger: {
          ...scrollTriggerOpt,
          start: `top 400px`,
          trigger: `.project-${projectName}`,
        },
        opacity: 100,
        y: 0,
        scale: 1,
        duration: 0.88,
        ease: 'power2',
      });
    });
  }, [projects]);
  return (
    <>
      {projects?.map((project, index) => (
        <Section key={project.name} gridContainer>
          <Row
            className={`project-${project.name
              .split(' ')
              .join('')} flex flex-col gap-10 md:min-h-[400px] md:items-center lg:gap-24 ${
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
