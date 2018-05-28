import pdfSrc from './resume.pdf';
import { home } from './home';
import { about } from './about';
import { categories } from './categories/';
import { projects } from './projects/';

const content = {
  home,
  about,
  categories,
  projects,
  resume: {
    downloadURL: '/download-resume-here',
    pdfSrc
  },
  nav: {
    icons: [
      { icon: 'linkedin', path: 'https://www.linkedin.com/in/waverlychao/' },
      // { icon: 'instagram', path: 'https://www.instagram.com/weekendstate/' },
    ],
    links: [
      { className: 'nav__link', text: 'about', path: '/about' },
      { className: 'nav__link', text: 'projects', path: '/projects' },
      { className: 'nav__logo', text: 'wc', path: '/' },
    ]
  }
}

export default content;

