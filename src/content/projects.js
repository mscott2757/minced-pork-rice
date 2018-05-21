import React from 'react';
import { ProjectImg, Quote, Video } from './utils';
import testBanner from '../images/test-banner.jpg';


const exampleText1 = 'Test1 ';

const exampleText2 = 'Test2';

const exampleText3 = 'Test3';

export const projects = {
 /** STRATEGY PROJECTS **/

  'dt-recruit': {
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
  },

  'trends': {
    title: 'Trend Research',
    body: (
      <div>
      <h3>Background</h3>
      <p>We partnered with internal digital and innovation groups to host an in-person and virtual workshop with 20+ participants, centered around a simple question within the context of the financial industry. </p>

      <Quote><p>
      How might we best inspire our customers to fall in love with our digital channels?
      </p></Quote>

      <ProjectImg src='molly'/>

      <h3>Process</h3>
      <p>In our workshop, we used an outside-in approach and took a look at emerging consumer trend signals outside of the financial industry. We used these trends to set context for our ideation session. Some of these trend themes and signals included: </p>

      <ol>
      <li>Photo moments</li>
      <li>“Entertainment-ization” of product</li>
      <li>Being big, acting small</li>
      </ol>

      <ProjectImg src='wall'/>

      <p>We mapped our ideas to some of the most prominent customer experience pain points across multiple product customer journeys. Following the workshop, we had 2 weeks of synthesizing our 90+ ideas into themes and opportunity areas. </p>

      <ProjectImg src='blue'/>

      <p>In this process, we found that there was actually a gap between the identified pain points, and the actual pain points our ideas solved for. We found that the identified pain points were often feature and function-focused, while our ideation session produced ideas that solved for emotional pain points. Before our customer could fall in love with our digital channels and have these emotional needs met, we first had to establish the foundation of our customer’s respect. </p>

        <ProjectImg src='foamboard'/>

      <Quote><h4><b>“Without respect, there is no love.” </b></h4>
      <p><i>“Lovemarks” Kevin Roberts, CEO Worldwide, Saatchi & Saatchi </i></p></Quote>

      <p>The team came away with 5 opportunity areas and conducted an initial prioritization exercise within these areas based upon their perceived value and difficulty level in solving for the identified gaps. We are excited to explore new and existing services, products, and spaces across these opportunity areas. </p>

      </div>
    )
    
  },

  'dt-adient': {
    title: 'Digital Transformation Roadmap',
    body: (
      <div>
        <h3>Background</h3>
        <p>When you are part of a company in which success is defined as doing things business as usual, what is the incentive to change things up? We set out to infuse elements of human centered design and innovation to empower and enable our client to best tackle the disruption they were seeing in their industry.</p>
        
        <ProjectImg src='dt'/>   

        <Quote><p>How might we create an innovative experience that can transform the culture, strategy, and priorities of a global automobile company from the inside out?
        </p></Quote>


        <h3>Process</h3>

        <p>Before we could design this experience, we had to first understand our client’s overall work culture and existing processes. We went onsite to immerse ourselves in their environment and interviewed individuals across a variety of roles ranging from both the IT and business side. 
        </p>

        <p>We then brought our client over to our offices to get them thinking differently in an open office environment. We designed a weeklong design thinking workshop that incorporated a combination of case studies, speakers, outside-in inspiration, and activities to walk them through the design process. One of the first things we did was divide up the group into teams based off of their Personality Poker suit, emphasizing the importance of diverse and balanced teams. 
        </p>

        <ProjectImg src='poker'/>  

        <p>We co-created 5 personas from our ethnographic interviews, and through prioritization exercises, chose 2 to develop customer journeys and problem statements for. We also brought our clients on an ethno-safari at local car dealerships so they could understand what current customers were looking for in their next purchase.</p>

        <ProjectImg src='empathy'/>   

        <p>From there, we had ideation and brainstorming exercises that resulted in 3 medium-fi analogue prototypes. We tested these by presenting them to their CIO to get feedback and validation. We ended the one week workshop by creating a business model canvas, priotizing key efforts, and identifying obstacles. 
        </p>

        <ProjectImg src='fastcar' />

        <p>This workshop was just the first step in engaging with our client. We went back onsite to present their findings and prototypes to the rest of our client’s teams, and paved the way for our machine learning and AI team to continue the engagement.</p>

      </div>
    )
  },

  'goals': {
    title: '#Goals: A smarter way to plan finances',
    body: (
      <div>
        <h3>Background</h3>
        <p>Financial planning can be ambiguous and intimidating for students and young professionals. We wanted to design a platform to make financial planning more approachable and relevant, seamlessly integrated into each Millennial’s busy lifestyle.</p>

        <h3>Process</h3>
        <p>We conducted user research through 10+ ethnographic interviews in person and over the phone. Through these interviews, we created three personas: a university student, a young professional, and a pair of newlyweds. We eventually cut the newlyweds persona to have a tighter focus on our user.</p>

        <ProjectImg src='personas' />

        <p>We researched other apps currently on the market to better understand what offerings are already out there and how we would differentiate ourselves. We organized the current financial planning apps into 3 categories: spending, saving, and investing. 
        </p>

        <ProjectImg src='matrix' />

        <p>We positioned ourselves as a potentially highly social app, utilizing spending data to help them better plan for their savings. Users could sync up their financial information and make wishes, or financial goals, and use our app as a progress tracker.</p>

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

 /** DESIGN PROJECTS **/

 'freelance': {
    title: 'Freelance',
    body: (
      <div>
        <h3>Local Organizations</h3>
        <p>A collection of various visual design projects for local organizations, including flyers and promotional materials for Facebook and print.</p>
        <ProjectImg src='f1' />
        <ProjectImg src='f2' />        
        <ProjectImg src='f3' />
        <ProjectImg src='f4' />       

        <h3>Student Elections</h3>
        <p>Design assets for a student election campaign at UC Berkeley. </p>

        <ProjectImg src='f6' />       
        <ProjectImg src='f7' />

        <h3>Daily Dose</h3>
        <p>A design challenge to create social media content for campaigns on Instagram and Facebook.</p>

        <ProjectImg src='f8' />        
        <ProjectImg src='f9' />
        <ProjectImg src='f10' />       
        <ProjectImg src='f11' />

        <h3>Personas</h3>
        <p>A series of personas created for an international payments project, consisting of user research and a design workshop. Final deliverable was a presentation deck.</p>

        <ProjectImg src='f12' />   
        <ProjectImg src='f13' />
        <ProjectImg src='f14' />   

        <h3>Personal logo</h3>
        <p>A logo inspired by my nickname, Waves, and my initials.</p>

        <ProjectImg src='f5' />

      </div>
    )
  },

 'portfolio': {
    title: 'Portfolio redesign',
    body: (
      <div>
        <h3>Background</h3>
        <p>What is my story? How have my experiences coalesced to create my unique point of view? This is the two month culmulation of asking the right questions, soul searching, wireframing, gathering feedback, and learning React.</p>
        <h3>Wireframes</h3>
        <ProjectImg src='web' />
        <ProjectImg src='mobile' />

      </div>
    )
  },

 /** FOR FUN PROJECTS **/

  'fishbowl': {
    title: 'Fishbowl: A short film',
    imgSrc: 'test-banner',
    body: (
      <div>
        <h3>Background</h3>
        <p>In the spring semester of my senior year, I got the opportunity to film and produce a short film that critically analyzed and reflected upon Asian/Asian American representation in media.</p>

        <Quote><p>How might we ignite a conversation on the role of Asian Americans in media and the challenges each individual faces in telling their story?</p></Quote>

        <h3>PROCESS</h3>

        <p>Throughout the semester, we had been watching a variety of films to better contextualize and understand the historical progression of Asian representation in media. Our research came from a variety of sources, including Youtube channels produced by Asian Americans, full-length movies, and class readings. We also interviewed our peers to better understand their perspectives.</p>

        <p>Over the course of a month of script writing, filming, and producing, we created Fish Bowl. It is a twist on the TV show Shark Tank. In this short film, we take a closer look at some of the reasons why Asian Americans are represented the way they are, and the narratives we are trying to share.</p>

        <h3>FINAL PRODUCT</h3>
        <Video src="https://drive.google.com/file/d/0B_zkVXFBztBBTy1sUVozWGt1Qmc/preview" />
      </div>
    )
  },
}
