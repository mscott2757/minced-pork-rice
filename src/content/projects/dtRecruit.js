import React from 'react';
import { ProjectImg, Quote, Video } from '../utils';

export const dtRecruit = {
  thumbImg: 'postit',
  description: 'How might we engage students in a recruiting experience that builds up their confidence and also gives us an opportunity to build a relationship before they ever set foot in the company? ',
  title: 'Redesigned Recruitment Experience',
  body: (
    <div>
      <h3>Background</h3>
      <p>Hunting for a new job right out of college can be a scary process. We set out to design an experience that would alleviate some of those fears while building upon relevant skills students would need in the workplace.</p>

      <Quote><p>How might we engage students in a recruiting experience that builds up their confidence and also gives us an opportunity to build a relationship before they ever set foot in the company?</p></Quote>

      <h3>Process</h3>
      <p>We first reached out to student organizations at UC Berkeley and SJSU through our alumni network and identified groups to partner with. We then engaged the student leaders at each campus with a mini Design Thinking session to better understand their anxieties, concerns, career dreams, and long-term goals.</p>

      <ProjectImg src='affinity'/>

      <p>We first reached out to student organizations at UC Berkeley and SJSU through our alumni network and identified groups to partner with. We then engaged the student leaders at each campus with a mini Design Thinking session to better understand their anxieties, concerns, career dreams, and long-term goals. </p>

      <ProjectImg src='fb'/>

      <p>Through a co-creation process with the student leaders, we designed a one-day design-a-thon. The first half focused on building relationships and skill sets while the second half focused on applying these new skills. Throughout the entire day, students were able to interact with consultants at all levels, from analysts to senior principals. </p>

      <ProjectImg src='marsh1'/>
      <ProjectImg src='marsh2'/>

      <p>The first half of the day was a design thinking training workshop in which we presented user research, practiced ethnographic interviewing, created personas, and built out customer journeys. </p>

      <p>The second half of the day focused on applying this design process to a Pokémon Go (AR mobile gaming app) case study. Each team had a facilitator to guide them through the case, and eventually presented their case to a panel of judges at the end of the day.
      </p>

      <ProjectImg src='thinking'/>

      <p>We ultimately had exposure to 1000+ students across the two campuses’ design-a-thons, with 150+ sign ups and 80 final participants. The top 3 teams at each campus were extended opportunities to interview, resulting in offers for a handful of candidates.</p>

    </div>
  )
}
