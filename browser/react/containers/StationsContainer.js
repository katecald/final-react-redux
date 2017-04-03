import React, {Component} from 'react';
import Stations from '../components/Stations';
import {connect} from 'react-redux';

const convertSongsToStations = (songsArray) => {
  let songsObj = {};
  songsArray.forEach(song => {
    if (songsObj[song.genre]) songsObj[song.genre].push(song);
    else songsObj[song.genre] = [song];
  })
  console.log(songsObj);
  return songsObj
}

const mapStateToProps = (state, ownProps) => {
  return {
    stations: convertSongsToStations(state.songs)
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;
