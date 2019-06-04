import React from 'react';
import { ProjectImg } from '../utils';

export const freelance = {
  thumbImg: 'freelance',
  id: 'freelance',
  description: 'Visual design portfolio of digital assets used for publicity and social media',
  title: 'Freelance',
  bannerImg: 'jpdispo',  
  body: (
    <div>
      <h3>UI Concepts</h3>
      <p>A colorful, minimal, podcast app</p>
      <ProjectImg src='f15' />
      <ProjectImg src='f16' />

      <h3>Local Organizations</h3>
      <p>A collection of various visual design projects for local organizations, including flyers and promotional materials for Facebook and print.</p>
      <ProjectImg src='f1' />
      <ProjectImg src='f2' />
      <ProjectImg src='f3' />
      <ProjectImg src='f4' />


      <h3>Personas</h3>
      <p>A series of personas created for an international payments project, consisting of user research and a design workshop. Final deliverable was a presentation deck.</p>

      <ProjectImg src='f12' />
      <ProjectImg src='f13' />
      <ProjectImg src='f14' />

      <h3>Student Elections</h3>
      <p>Design assets for a student election campaign at UC Berkeley. </p>

      <ProjectImg src='f6' />
      <ProjectImg src='f7' />

      <h3>Personal logo</h3>
      <p>A logo inspired by my nickname, Waves, and my initials.</p>

      <ProjectImg src='f5' />

    </div>
  )
}

