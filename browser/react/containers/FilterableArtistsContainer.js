import {connect} from 'react-redux';
import React, {Component} from 'react';

import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class ArtistsContainer extends Component {

    constructor(props){
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {

    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    artists: state.artists.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const FilterableArtistsContainer = connect(mapStateToProps, mapDispatchToProps)(ArtistsContainer);

export default FilterableArtistsContainer;
