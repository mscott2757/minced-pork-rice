import { home, categories, projects } from './content/';
import pdfSrc from './resume.pdf';
import { TOGGLE_RESUME } from './actions';

const mincedPorkRice = (state = {
  home,
  categories,
  projects,
  resume: {
    visible: false,
    pdfSrc
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
