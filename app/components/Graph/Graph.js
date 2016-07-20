import React from 'react';
import MG from 'metrics-graphics';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ data: [] });
  }

  componentWillUpdate() {
    let node = document.getElementById('traffic');
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  updateChart(data) {
    MG.data_graphic({
      data,
      width: 900,
      height: 500,
      legend: ['Pcap 1', 'Pcap 2', 'Pcap 3', 'Pcap 4', 'Pcap 5'],
      legend_target: '.legend',
      right: 40,
      error: 'There is an error',
      color: ['rgb(91, 149, 255)', '#37c293', '#e37066'],
      target: '#traffic',
      x_accessor: 'time',
      y_accessor: 'packets'
    });
  }

  render() {
    let styles = {
      visibility: 'visible'
    };
    if (this.props.data !== 'Loading' && this.props.data.length > 0) {
      this.updateChart(this.props.data);
    } else {
      styles.visibility = 'hidden';
    }
    // render the element targeted by the graph
    return (
      <div>
        <div id="traffic" ref="traffic" style={styles}></div>
      </div>
    );
  }
}

Graph.propTypes = {
  getData: React.PropTypes.func
};
