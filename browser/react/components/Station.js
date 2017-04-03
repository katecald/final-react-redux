import React from 'react';
import Songs from '../components/Songs';

export default function Station (props) {
  console.log('STATION PROPS', props)
  return (
    <div>
      <h3>{props.genreName}</h3>
      <Songs
        songs={props.songs}
        currentSong={props.currentSong}
        isPlaying={props.isPlaying}
        toggleOne={props.toggleOne}
      />
    </div>
  );

}
