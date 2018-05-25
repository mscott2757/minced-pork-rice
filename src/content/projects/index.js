import { freelance } from './freelance';
import { portfolio } from './portfolio';
import { fishbowl } from './fishbowl';
import { medium } from './medium';
import { weekendState } from './weekendState';
import { movieMomentChasers } from './movieMomentChasers';
import { dtRecruit} from './dtRecruit';
import { trends } from './trends';
import { goals } from './goals';
import { dtAdient } from './dtAdient';

export const projects = {
  /** STRATEGY PROJECTS **/
  'dt-recruit': dtRecruit,
  'trends': trends,
  'dt-adient': dtAdient,
  'goals': goals,

  /* DESIGN PROJECTS */
 'freelance': freelance,
 'portfolio': portfolio,

  /* FOR FUN PROJECTS */
  'fishbowl': fishbowl,
  'weekend-state': weekendState,
  'medium': medium,
  'movie-moment-chasers': movieMomentChasers
}

