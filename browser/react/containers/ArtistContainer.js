import { connect } from 'react-redux';

import Artist from '../components/Artist';

import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.songs,
    selectedArtist: state.artists.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list))
    }
  }
}

const ArtistContainer = connect(mapStateToProps, mapDispatchToProps)(Artist);

export default ArtistContainer;
