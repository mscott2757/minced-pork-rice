import squareImg from '../../images/test-square.jpg';
import freelance from '../../images/design/freelance.jpg';
import goals from '../../images/design/goals.jpg';
import portfolio from '../../images/design/portfolio.jpg';



export const digitalScreens = {
  id: 'design-project',
  title: 'design',
  projects: [
    { imgSrc: freelance,
      title: 'Freelance work',
      description: 'I have been designing digital assets and curating content for local businesses, Fortune 500 corporations, and student orgs to foster collaboration and build up communities in an aesthetically pleasing way.',
      id: 'freelance'
    },
    { imgSrc: goals,
      title: '#goals: A financial planner',
      description: "Financial planning can be intimidating for students and young professionals. We wanted to design a platform to make financial planning more approachable and relevant, seamlessly integrated into each individual's busy lifestyle.",
      id: 'goals'
    },
    { imgSrc: portfolio,
      title: 'Portfolio website redesign',
      description: 'What is my story? How have my experiences coalesced to create my unique point of view? This is the two month culmulation of asking the right questions, soul searching, wireframing, gathering feedback, and learning React.',
      id: 'portfolio'
    },
  ]
}
