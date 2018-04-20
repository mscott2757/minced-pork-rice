import squareImg from '../../images/test-square.jpg';
import fishLogo from '../../images/fun/fishbowl/1.gif'
import travel from '../../images/fun/travel.jpg'
import medium from '../../images/fun/medium.jpg'
import weekend from '../../images/fun/wkndst.jpg'


const exampleDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus arcu. Vivamus eget efficitur ante, quis tempus leo. Nunc vitae ante porta, congue nibh ut, mollis tellus. Donec in nisl id tellus aliquet feugiat eget quis lacus. Maecenas ut tortor quam.';

export const justForFun = {
  id: 'just-for-fun',
  title: 'just for fun',
  projects: [
    {
      imgSrc: fishLogo,
      title: 'FISHBOWL: a short film',
      description: 'In this short film, we take a closer look at some of the reasons why Asian Americans are represented the way they are, and the narratives we are trying to share.',
      id: 'fishbowl'
    },
    {
      imgSrc: weekend,
      title: 'WEEKEND STATE: a photo story',
      description: 'A finsta (fake instagram account) of curated photos from my travels and photo walks, all shot on 35mm and medium format film.',
      id: 'weekend-state'
    },
    {
      imgSrc: medium,
      title: 'MEDIUM: Personal blog',
      description: 'My Medium account - a place for me to share my point of view on media, print, DIY activities, and Asian American activism.',
      id: 'medium'
    },

    {
      imgSrc: travel,
      title: 'MOVIE MOMENT CHASERS: vlog series',
      description: "A movie moment is that moment where everything feels as it should - as if all along, someone was there beside you, writing your life's script and making it come to life.",
      id: 'movie-moment-chasers'
    },

  ]
}

