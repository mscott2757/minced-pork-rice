import React from 'react';

import recruit from '../images/hi.jpg'

const exampleText1 = 'Hunting for a new job right out of college can be a scary process. We set out to design an experience that would alleviate some of those fears while building upon relevant skills students would need in the workplace. ';

const exampleText2 = 'How might we engage students in a recruiting experience that builds up their confidence and also gives us an opportunity to build a relationship before they ever set foot in the company?';

const exampleText3 = 'We first reached out to student organizations at UC Berkeley and SJSU through our alumni network and identified groups to partner with. We then engaged the student leaders at each campus with a mini Design Thinking session to better understand their anxieties, concerns, career dreams, and long-term goals. ';


import { ProjectImg } from './utils';




export const projects = {
 /** STRATEGY PROJECTS **/

  'dt-recruit': {
    title: 'Redesigned Recruitment Experience',
    body: (
      <div>
        <h3>Background</h3>
        <p>{exampleText1}</p>
        
        <img src={recruit}></img>

        <h2>{exampleText2}</h2>
        <p></p>

        <h3>Process</h3>
        <p>{exampleText3}</p>
      </div>
    )
  },

  'dt-adient': {
    title: 'Digital Transformation Roadmap',
    body: (
      <div>
        <h3>Background</h3>
        <p>{exampleText1}</p>
        <ProjectImg src='test-square' />
        <h3>Problem Statement</h3>
        <p>{exampleText2}</p>
      </div>
    )
  },

 /** DESIGN PROJECTS **/

 'freelance': {
    title: 'Freelance',
    body: (
      <div>
        <h3>Background</h3>
        <p>{exampleText1}</p>
        <h3>Problem Statement</h3>
        <p>{exampleText2}</p>
      </div>
    )
  },

 'goals': {
    title: '#Goals: A smarter way to plan finances',
    body: (
      <div>
        <h3>Background</h3>
        <p>{exampleText1}</p>
        <h3>Problem Statement</h3>
        <p>{exampleText2}</p>
      </div>
    )
  },

   'portfolio': {
    title: 'Portfolio redesign',
    body: (
      <div>
        <h3>Background</h3>
        <p>{exampleText1}</p>
        <h3>Problem Statement</h3>
        <p>{exampleText2}</p>
      </div>
    )
  },

 /** FOR FUN PROJECTS **/

  'fishbowl': {
    title: 'Fishbowl: A short film',
    body: (
      <div>
        <h3>Background</h3>
        <p>{exampleText1}</p>
        <h3>Problem Statement</h3>
        <p>{exampleText2}</p>
      </div>
    )
  },

}
