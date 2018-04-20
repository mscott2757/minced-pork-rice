import squareImg from '../../images/test-square.jpg';
import digital from '../../images/strategy/digital.jpg';
import sharpie from '../../images/strategy/sharpie.jpg';
import postit from '../../images/strategy/postit.jpg';


export const creativeWorkshops = {
  id: 'creative-workshops',
  title: 'Strategy',
  projects: [
    { imgSrc: postit,
      title: 'Redesigned recruitment experience',
      description: 'How might we engage students in a recruiting experience that builds up their confidence and also gives us an opportunity to build a relationship before they ever set foot in the company? ',
      id: 'dt-recruit'
    },

    { imgSrc: digital,
      title: 'Design thinking for digital transformation',
      description: 'How might we create an innovative experience that can transform the culture, strategy, and priorities of a global automobile company from the inside out?',
      id: 'dt-adient'
    },

    { imgSrc: sharpie,
      title: 'Trends',
      description: 'We took an idea and turned it into a series of trend briefings and workshops.',
      id: 'trends'
    },
  ]
}
