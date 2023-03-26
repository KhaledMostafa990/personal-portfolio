'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface AnimationEffectProps {
  target: string | Element | Element[] | string[];
  scrollTriggerElement?: string | Element | Element[] | string[];
  scrollOptions?: any;
  animationOptions?: gsap.TweenVars;
  media?: string;
}

export function useAnimationEffect({
  target,
  scrollTriggerElement,
  scrollOptions,
  animationOptions,
  media,
}: AnimationEffectProps) {
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  useEffect(() => {
    if (!isAnimationReady && scrollTriggerElement) {
      gsap.registerPlugin(ScrollTrigger);
      setIsAnimationReady(true);
    }
  }, [isAnimationReady, scrollTriggerElement]);

  useEffect(() => {
    if (isAnimationReady) {
      const anim = gsap.matchMedia();

      anim.add(
        {
          isMedia: media ?? '(min-width: 370px)',
        },
        (context: any) => {
          const { isMedia } = context.conditions;
          if (isMedia) {
            gsap.to(target, {
              scrollTrigger: {
                trigger: scrollTriggerElement,
                ...scrollOptions,
              },
              ...animationOptions,
            });
          }
        },
      );
    }
  }, [isAnimationReady, target, scrollTriggerElement, scrollOptions, animationOptions, media]);
}
