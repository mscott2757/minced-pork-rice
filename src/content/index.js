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
    pdfSrc
  },
  nav: {
    icons: [
      { icon: 'linkedin', path: 'https://www.linkedin.com/in/waverlyc/' },
      { icon: 'instagram', path: 'https://www.instagram.com/yourbasicgoose/' },
    ]
  }
}

export default content;

