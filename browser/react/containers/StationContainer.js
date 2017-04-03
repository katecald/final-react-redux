import Station from '../components/Station';
import { connect } from 'react-redux';
import { convertSong } from '../utils'
import { toggleSong } from '../action-creators/player'



const mapStateToProps = (state, ownProps) => {
  return {
    genreName: ownProps.params.genre,
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genre)
      .map(convertSong),
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong,

  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list))
    }
  }
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;