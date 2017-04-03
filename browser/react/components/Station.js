import React from 'react';
import Songs from '../components/Songs';

export default function Station (props) {
  return (
    <div>
      <h3>GENRE NAME</h3>
      <Songs
        songs={}
        currentSong={}
        isPlaying={}
        toggleOne={}
      />
    </div>
  );

}
