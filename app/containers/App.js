import React, { Component, PropTypes } from 'react';
import Navbar from '../components/Nav/Nav';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };
  relaodclick() {
    location.reload();
  }

  render() {
    return (

      <div>
        <Navbar />
        {this.props.children}
        {(() => {
          if (process.env.NODE_ENV !== 'production') {
            const debugMenu = require('debug-menu');
            debugMenu.install();
            //activate context menu
            // const DevTools = require('./DevTools'); // eslint-disable-line global-require
            // return <DevTools/>;
          }
        })()
}               <button className="bottom" onClick={this.relaodclick.bind(this)}>Reload</button>
      </div>
    );
  }
}
