import squareImg from '../images/test-square.jpg';
import strategy from '../images/squares/international.jpg';
import design from '../images/design/freelance.jpg';
import forfun from '../images/squares/banana.jpg';
import resume from '../images/design/portfolio.jpg';
import testHomeBanner from '../images/test-home-banner.jpg';

/** 4 boxes **/

export const home = {
  imgSrc: testHomeBanner,
  categories: [

    /** 
    
    for two lines
    
    'Digital',
    'Screens'

    **/

    { imgSrc: strategy,
      lines: [
        'Service & Strategic Design',
      ],
      id: 'creative-workshops'
    },
    { imgSrc: design,
      lines: [
        'Visual Design'
      ],
      id: 'digital-screens'
    },
    { imgSrc: forfun,
      lines: [
        'Just for fun'
      ],
      id: 'just-for-fun'
    },
   
  ],
  titles: [
    { title: "I'm Waverly", type: 'name' },
    { title: "& I design", type: 'design' },
    { title: "creative", type: 'creative' },
    { title: "workshops", type: 'workshops' },
  ],
}

