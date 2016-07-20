import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Graph from '../components/Graph/Graph';
import * as Actions from '../actions/graph';

function mapStateToProps(state) {
  return {
    data: state.graph
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
