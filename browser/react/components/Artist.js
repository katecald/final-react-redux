import React from 'react';
import {Link} from 'react-router';

import Albums from './Albums';
import Songs from './Songs';

export default function Artist (props) {

  const artist = props.selectedArtist;
  const albums = artist.albums || [];
  const songs = artist.songs || [];

  return (
    <div>
      <h3>{ artist.name }</h3>
      <Albums albums={albums} />
      <Songs songs={songs} />
    </div>
  );

}
