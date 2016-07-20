import React, { Component } from 'react';
import Graph from '../containers/Graph';
import 'metrics-graphics/dist/metricsgraphics.css';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div>
          <Graph />
        </div>
      </div>
    );
  }
}
