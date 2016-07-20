import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dropbox from '../components/Dropbox/Dropbox';
import * as DropboxActions from '../actions/dropbox';
import * as GraphActions from '../actions/graph';
import * as ModalActions from '../actions/modal';

function mapStateToProps(state) {
  return {
    files: state.dropbox
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({},
        GraphActions, DropboxActions, ModalActions),
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropbox);
