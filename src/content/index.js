import pdfSrc from './resume.pdf';

export { home } from './home';
export { categories } from './categories';
export { projects } from './projects';

export const resume = {
  downloadURL: '/download-resume-here',
  pdfSrc
}

export const nav = {
  icons: [
    { icon: 'linkedin', path: 'https://www.linkedin.com/in/waverlychao/' },
    { icon: 'instagram', path: 'https://www.instagram.com/ibelieveinwaves/' },
  ],
  links: [
    { className: 'nav__link', text: 'about', path: '/about' },
    { className: 'nav__link', text: 'projects', path: '/projects' },
    { className: 'nav__logo', text: 'wc', path: '/' },
  ]
}

