import React from 'react';

export default class Tabs extends React.Component {
  render() {
    return (
      <ul className="horizontal-nav">
        <li className="active">Live</li>
        <li className="inactive">Capture</li>
        <li className="inactive">History</li>
      </ul>
    );
  }
}
