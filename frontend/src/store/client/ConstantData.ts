import logoIcon from 'public/images/logo.svg';
import linkedinSvg from 'public/images/icons/linkedin.svg';
import facebookSvg from 'public/images/icons/facebook.svg';
import twitterSvg from 'public/images/icons/twitter.svg';
import githubSvg from 'public/images/icons/github.svg';
import youtubeSvg from 'public/images/icons/youtube.svg';

export const globalClientStaticData = {
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
};
