import React from 'react';
import { ProjectImg, Quote, Video } from '../utils';

export const movieMomentChasers = {
  thumbImg: 'travel',
  title: 'MOVIE MOMENT CHASERS: travel vlog series',
  description: "A movie moment is that moment where everything feels as it should - as if all along, someone was there beside you, writing your life's script and making it come to life.",
  bannerImg: 'travel',
  body: (
    <div>
      <h3>Brighton</h3>
      <Video src="https://www.youtube.com/embed/Dys8Xi-GXiA" />


      <Quote>
        <h4>Made this little thing to remember our trip to England and specifically, our delightful, impromptu trip to Brighton! The film aesthetic is meant to leave you with some indie, beachy vibes. </h4>
        <p>Note: The Harry Potter post-credits scene is meant to be exceptionally cheesy.</p>
        <p>Footage shot on iPhone 6s | Photos shot on a Fujifilm disposable | Edited with Premiere Pro | Song: Warm Waves by Observer Drift </p>
      </Quote>

      <h3>London</h3>
      <Video src="https://www.youtube.com/embed/iftrMTWUtCE" />
        <Quote>
        <h4>"You find no man, at all intellectual, who is willing to leave London. No, Sir, when a man is tired of London, he is tired of life; for there is in London all that life can afford."</h4><h4>-Samuel Johnson </h4>


        <p>Footage shot on iPhone 6s | Photos shot on a Fujifilm disposable | Edited with Premiere Pro | Song: Ladies Don't Play Guitar by Tennis | After-credits song: Hedwig's Theme by John Williams </p>

        </Quote>

   </div>
  )


}


