import React from 'react';
import { ProjectImg } from '../utils';

export const portfolio = {
  thumbImg: 'portfolio',
  description: 'Learn about my latest website redesign, and the thought process that went into it.',
  title: 'Portfolio redesign',
  bannerImg: 'bwflowers',
  body: (
    <div>
      <h3>Process</h3>
      <p>In my latest web redesign, I set out to accomplish a few things: </p>
      <ol>
        <li>Prioritize and organize my curated projects to create a more definitive and holistic story of my past experiences
        </li>

        <li>Utilize my photography and those of my friends as key visual components throughout my website
        </li>

        <li>Create a space for some of my "just for fun" passion projects
        </li>    

        <li>Learn the basics of React, follow good Git practices, and develop comfortability with using Terminal
        </li>
      </ol>

      <h3>Initial Wireframes</h3>
      <ProjectImg src='web' />
      <ProjectImg src='mobile' />

      <p><i><b>Website features photos from:</b> <a href="https://photo.masonchan.co/" target="_blank">Mason Chan Scott</a>, <a href="https://www.pexels.com/" target="_blank">Pexels</a>, and <a href="https://unsplash.com/" target="_blank">Unsplash</a>.</i></p>
   
    </div>
  )
}
