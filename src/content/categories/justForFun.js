import fishLogo from '../../images/fun/fishbowl/1.gif'
import travel from '../../images/fun/travel.jpg'
import medium from '../../images/fun/medium.jpg'
import weekend from '../../images/fun/wkndst.jpg'

export const justForFun = {
  title: 'Just For Fun',
  imgSrc: 'for-fun',
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
      id: 'weekend-state',
      externalLink: 'https://www.instagram.com/weekendstate/'
    },
    {
      imgSrc: medium,
      title: 'MEDIUM: Personal blog',
      description: 'My Medium account - a place for me to share my point of view on media, print, DIY activities, and Asian American activism.',
      id: 'medium',
      externalLink: 'https://medium.com/@waverlychao'
    },

    {
      imgSrc: travel,
      title: 'MOVIE MOMENT CHASERS: vlog series',
      description: "A movie moment is that moment where everything feels as it should - as if all along, someone was there beside you, writing your life's script and making it come to life.",
      id: 'movie-moment-chasers',
      externalLink: 'https://www.youtube.com/channel/UCz-B_Dn958RbC7q-oOclQ8A'
    },

  ]
}

