import Albums from '../components/Albums';
import {connect} from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {
    albums: state.albums.list
  }
}
const mapDispatchToProps = (dispatch, ownProps) => ({})

const AlbumsContainer = connect(mapStateToProps, mapDispatchToProps)(Albums)

export default AlbumsContainer;
