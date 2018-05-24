import digital from '../../images/strategy/digital.jpg';
import sharpie from '../../images/strategy/sharpie.jpg';
import postit from '../../images/strategy/postit.jpg';
import goals from '../../images/design/goals.jpg';

export const creativeWorkshops = {
  title: 'Design Strategy',
  imgSrc: 'strategy',
  projects: [
    { imgSrc: postit,
      title: 'Redesigned recruitment experience',
      description: 'How might we engage students in a recruiting experience that builds up their confidence and also gives us an opportunity to build a relationship before they ever set foot in the company? ',
      id: 'dt-recruit'
    },

    { imgSrc: sharpie,
      title: 'Trends research',
      description: 'We took an idea and turned it into a series of trend briefings and workshops. This specifically talks about our process for a digital onboarding workshop.',
      id: 'trends'
    },

    { imgSrc: goals,
      title: '#goals: A financial planner',
      description: "Financial planning can be intimidating for students and young professionals. We wanted to design a platform that would make it more approachable and accessible.",
      id: 'goals'
    },

    { imgSrc: digital,
      title: 'Design thinking for digital transformation',
      description: 'How might we create an innovative experience that can transform the culture, strategy, and priorities of a global automobile company from the inside out?',
      id: 'dt-adient'
    },
  ]
}
