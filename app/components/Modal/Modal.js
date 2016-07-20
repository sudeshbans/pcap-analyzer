import React from 'react';
import className from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = ({
      isOpen: false
    });
    this.stayOpen = this.stayOpen.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isOpen: nextProps.isOpen
    });
  }

  close() {
    this.props.close();
  }

  stayOpen(event) {
    event.stopPropagation();
  }

  render() {
    let outer = className({
      'modal-outer': this.props.type === 'modal',
      'drawer-outer': this.props.type === 'drawer',

    });
    let inner = className({
      'modal-inner': this.props.type === 'modal',
      'drawer-inner': this.props.type === 'drawer'
    });
    return (
      <ReactCSSTransitionGroup
        transitionName={this.props.type}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
          {this.state.isOpen ?
            <div key="modal-animation" className={outer} onClick={this.close}>
              <div className={inner} onClick={this.stayOpen}>
                {this.props.children}
              </div>
            </div> : <span></span>}
      </ReactCSSTransitionGroup>
    );
  }
}

Modal.propTypes = {
  isOpen: React.PropTypes.bool,
  type: React.PropTypes.string.isRequired
};

export default Modal;
