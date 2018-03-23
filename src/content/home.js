import squareImg from '../images/test-square.jpg';

export const home = {
  categories: [
    { imgSrc: squareImg,
      lines: [
      'Creative',
      'Workshops'
      ],
      path: '/categories/creative-workshops'
    },
    { imgSrc: squareImg,
      lines: [
        'Digital',
        'Screens'
      ],
      path: '/categories/digital-screens'
    },
    { imgSrc: squareImg,
      lines: [
        'Interactive',
        'Experiences'
      ],
      path: '/categories/interactive-experiences'
    },
    { imgSrc: squareImg,
      lines: [
        'Just For',
        'Fun'
      ],
      path: '/categories/just-for-fun'
    }
  ],
  titles: [
    { title: "I'm Waverly", type: 'name' },
    { title: "& I design", type: 'design' },
    { title: "creative", type: 'creative' },
    { title: "workshops", type: 'workshops' },
  ],
}

