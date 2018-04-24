import React from 'react';
import { ProjectImg, Quote } from './utils';


const exampleText1 = 'Hunting for a new job right out of college can be a scary process. We set out to design an experience that would alleviate some of those fears while building upon relevant skills students would need in the workplace. ';

const exampleText2 = 'How might we engage students in a recruiting experience that builds up their confidence and also gives us an opportunity to build a relationship before they ever set foot in the company?';

const exampleText3 = 'We first reached out to student organizations at UC Berkeley and SJSU through our alumni network and identified groups to partner with. We then engaged the student leaders at each campus with a mini Design Thinking session to better understand their anxieties, concerns, career dreams, and long-term goals. ';

export const projects = {
 /** STRATEGY PROJECTS **/

  'dt-recruit': {
    title: 'Redesigned Recruitment Experience',
    body: (
      <div>
        <h3>Background</h3>
        <p>Hunting for a new job right out of college can be a scary process. We set out to design an experience that would alleviate some of those fears while building upon relevant skills students would need in the workplace.</p>

        <h2>How might we engage students in a recruiting experience that builds up their confidence and also gives us an opportunity to build a relationship before they ever set foot in the company?</h2>

        <h3>Process</h3>
        <p>We first reached out to student organizations at UC Berkeley and SJSU through our alumni network and identified groups to partner with. We then engaged the student leaders at each campus with a mini Design Thinking session to better understand their anxieties, concerns, career dreams, and long-term goals.</p>

        <p>We first reached out to student organizations at UC Berkeley and SJSU through our alumni network and identified groups to partner with. We then engaged the student leaders at each campus with a mini Design Thinking session to better understand their anxieties, concerns, career dreams, and long-term goals. </p>

        <p>Through a co-creation process with the student leaders, we designed a one-day design-a-thon. The first half focused on building relationships and skill sets while the second half focused on applying these new skills. Throughout the entire day, students were able to interact with consultants at all levels, from analysts to senior principals. </p>

        <p>The first half of the day was a design thinking training workshop in which we presented user research, practiced ethnographic interviewing, created personas, and built out customer journeys. </p>

        <p>The second half of the day focused on applying this design process to a Pokémon Go (AR mobile gaming app) case study. Each team had a facilitator to guide them through the case, and eventually presented their case to a panel of judges at the end of the day. 
        </p>

        <p>We ultimately had exposure to 1000+ students across the two campuses’ design-a-thons, with 150+ sign ups and 80 final participants. The top 3 teams at each campus were extended opportunities to interview, resulting in offers for a handful of candidates.</p>

      </div>
    )
  },

  'dt-adient': {
    title: 'Digital Transformation Roadmap',
    body: (
      <div>
        <h3>Background</h3>
        <p>When you're part of a company in which success is defined as doing things business as usual, there's not much incentive to change things up. We set out to infuse elements of human centered design and innovation to empower and enable our client to best tackle the disruption they were seeing in their industry.</p>

        <h2>How might we create an innovative experience that can transform the culture, strategy, and priorities of a global automobile company from the inside out?
        </h2>

        <ProjectImg src='test-square' />

        <h3>Process</h3>

        <p>Before we could design this experience, we had to first understand our client’s overall work culture and existing processes. We went onsite to immerse ourselves in their environment and interviewed individuals across a variety of roles ranging from both the IT and business side. 
        </p>

        <p>We then brought our client over to our offices to get them thinking differently in an open office environment. We designed a weeklong design thinking workshop that incorporated a combination of case studies, speakers, outside-in inspiration, and activities to walk them through the design process. 
        </p>

        <ProjectImg src='test-square' />

        <p>We co-created 5 personas from our ethnographic interviews, and through prioritization exercises, chose 2 to develop customer journeys and problem statements for. From there, we had ideation and brainstorming exercises that resulted in 3 medium-fi analogue prototypes. We tested these by presenting them to their CIO to get feedback and validation. 
        </p>

        <ProjectImg src='test-square' />

        <p>This workshop was just the first step in engaging with our client. We went back onsite to present their findings and prototypes to the rest of our client’s teams, and paved the way for our machine learning and AI team to continue the engagement.</p>


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
        <p>Financial planning can be ambiguous and intimidating for students and young professionals. We wanted to design a platform to make financial planning more approachable and relevant, seamlessly integrated into each Millennial’s busy lifestyle.</p>

        <h2>HMW...</h2>

        <ProjectImg src='youngppl' />

        <h3>Process</h3>
        <p>We conducted user research through 10+ ethnographic interviews in person and over the phone. Through these interviews, we created three personas: a university student, a young professional, and a pair of newlyweds. We eventually cut the newlyweds persona to have a tighter focus on our user.</p>

        <ProjectImg src='personas' />

        <p>We researched other apps currently on the market to better understand what offerings are already out there and how we would differentiate ourselves. We organized the current financial planning apps into 3 categories: spending, saving, and investing. 
        </p>

        <ProjectImg src='matrix' />

        <p>We positioned ourselves as a potentially highly social app, utilizing spending data to help them better plan for their savings. Users could sync up their financial information and make wishes, or financial goals, and use our app as a progress tracker.</p>

        <ProjectImg src='journal' />

        <p>I drew some wireframes and went to test out our ideas with the users we had originally interviewed. They gave us great feedback and told us what features they liked, did not really need, and wanted. One example was the name of our app - our original name WingIT appeared to give off a careless vibe, which took away from the integrity of our financial planning app.
        </p>

        <ProjectImg src='wire1' />
        <ProjectImg src='wire2' />

        <p>I eventually converted these sketches into hi-fi wireframes and continued to collect feedback and make design changes. Using the wireframes, I built a clickable prototype and presented it to my team.
        </p>

        <h3>Design Challenges & Takeaways</h3>

        <ol>
          <li>I learned to not jump to hi-fi wireframes right away - users will tend to provide feedback that is focused more on aesthetics as opposed to functionality. It is also way easier to make quick changes on a lo-fi wireframe.</li> 

          <li>Financial planning is quite broad, and it is important to have a tight definition on what it means with your app and for your users.
          </li>

          <li>Sometimes, you might fit into the user personas, but you should not assume that you are the user you are designing for!
          </li>
        </ol>

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
        <Quote>
          <p>{exampleText3}</p>
        </Quote>
        <h3>Problem Statement</h3>
        <p>{exampleText2}</p>
      </div>
    )
  },
}
