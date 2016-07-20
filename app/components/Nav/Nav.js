import React from 'react';
import Modal from '../Modal/Modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/modal';
import Dropbox from '../../containers/Dropbox';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };

    this.open = this.open.bind(this);
  }

  open() {
    this.props.open();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open
    });
  }

  render() {
    return (
      <div className="navbar">
        <span className="menu-spacing">
          <i
            onClick={this.open}
            className="fa fa-bars"
            style={{ cursor: 'pointer' }} />
        </span>
        <Modal
          isOpen={this.props.isOpen}
          close={this.props.close}
          type="drawer">
          <div className="drawer-menu">
            <Dropbox />
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isOpen: state.modal
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
