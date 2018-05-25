import React from 'react';
import { ProjectImg, Quote, Video } from '../utils';

export const goals = {
  thumbImg: 'goals',
  description: "Financial planning can be intimidating for students and young professionals. We wanted to design a platform that would make it more approachable and accessible.",
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
}
