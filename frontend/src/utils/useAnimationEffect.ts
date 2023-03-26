'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface AnimationEffectProps {
  target?: string | Element;
  scrollTriggerElement?: string | Element;
  scrollOptions?: any;
  animationOptions?: gsap.TweenVars;
  media?: {
    size: 'mobile' | 'tablet' | 'desktop' | 'desktopLarge';
    animationsEffect: AnimationEffectProps;
  }[];
}

export function useAnimationEffect({
  target,
  scrollTriggerElement,
  scrollOptions,
  animationOptions,
  media,
}: AnimationEffectProps) {
  const [isAnimationReady, setIsAnimationReady] = useState(false);
  const [animationEffect] = useState({
    scrollTrigger: {
      trigger: scrollTriggerElement,
      ...scrollOptions,
    },
    ...animationOptions,
  });

  useEffect(() => {
    if (!isAnimationReady && scrollTriggerElement) {
      gsap.registerPlugin(ScrollTrigger);
      setIsAnimationReady(true);
    }
  }, [isAnimationReady, scrollTriggerElement]);

  useEffect(() => {
    if (isAnimationReady) {
      const anim = gsap.matchMedia();

      if (!target) return;

      anim.add(
        {
          mobile: '(max-width: 767px)',
          tablet: '(max-width: 1023px)',
          desktop: '(max-width: 1439px)',
          desktopLarge: '(min-width: 1440px)',
        },
        (context: any) => {
          let currentAnimationEffect = animationEffect;

          if (media) {
            media.forEach(({ size, animationsEffect }) => {
              if (context.conditions[size] === true) {
                currentAnimationEffect = {
                  ...currentAnimationEffect,
                  scrollTrigger: {
                    ...currentAnimationEffect.scrollTrigger,
                    ...animationsEffect.scrollOptions,
                  },
                };
              }
            });
          }

          gsap.to(target, currentAnimationEffect);
        },
      );
    }
  }, [isAnimationReady, target, animationEffect, media, animationOptions]);
}
