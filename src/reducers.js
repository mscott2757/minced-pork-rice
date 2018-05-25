import { home, categories, projects, nav, resume, about } from './content/';
import { TOGGLE_RESUME } from './actions';

const mincedPorkRice = (state = {
  home,
  categories,
  projects,
  nav,
  about,
  resume: {
    visible: false,
    ...resume
  }
}, action) => {
  switch (action.type) {
    case TOGGLE_RESUME:
      let { resume } = state;
      return {
        ...state,
        resume: {
          ...resume,
          visible: !resume.visible
        }
      }
    default:
      return state;
  }
}

export default mincedPorkRice;
