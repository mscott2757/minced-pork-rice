import React from 'react';
import { ProjectImg, Quote, Video } from '../utils';

export const dtAdient = {
  thumbImg: 'digital',
  description: 'How might we create an innovative experience that can transform the culture, strategy, and priorities of a global automobile company from the inside out?',
  title: 'Digital Transformation Roadmap',
  bannerImg: 'road',  
  body: (
    <div>
      <h3>Background</h3>
      <p>When you are part of a company in which success is defined as doing things business as usual, what is the incentive to change things up? We set out to infuse elements of human centered design and innovation to empower and enable our client to best tackle the disruption they were seeing in their industry.</p>

      <ProjectImg src='dt'/>

      <Quote><h4>How might we create an innovative experience that can transform the culture, strategy, and priorities of a global automobile company from the inside out?
      </h4></Quote>


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

      <h3>Design Challenges & Takeaways</h3>

      <ol>
        <li>The success of a design thinking workshop is marked not simply by the workshop itself, but also by the ability to execute on the co-created roadmap. Without this, the workshop can easily become just a fun, feel-good experience.</li>
        <li>It is imperative to obtain executive support and buy in from the get-go. This inlcudes setting realistic expectations on what design thinking is - a mindset that requires organizational and cultural change - and what it is not - just another process. 
        </li>
      </ol>

      <p><i><b>Note:</b> The digital deliverables for this project have been excluded due to the nature of the NDA for this engagement.</i></p>
    </div>
  )
}
