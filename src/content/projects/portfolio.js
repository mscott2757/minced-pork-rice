import React from 'react';
import { ProjectImg } from '../utils';

export const portfolio = {
  thumbImg: 'portfolio',
  description: 'Learn about my latest website redesign, and the thought process that went into it.',
  title: 'Portfolio redesign',
  bannerImg: 'bwflowers',
  body: (
    <div>
      <h3>Background</h3>
      <p>What is my story? How have my experiences coalesced to create my unique point of view? This is the two month culmulation of asking the right questions, soul searching, wireframing, gathering feedback, and learning React.</p>
      <h3>Low-fi Wireframes</h3>
      <ProjectImg src='web' />
      <ProjectImg src='mobile' />
    </div>
  )
}
