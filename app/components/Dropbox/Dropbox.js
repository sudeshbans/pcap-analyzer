import React from 'react';
import classNames from 'classnames';
import lodash from 'lodash';
import Dropzone from 'react-dropzone';

export default class Dropbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: props.files || []
    };
    this.onDrop = this.onDrop.bind(this);
    this.onRemoveAll = this.onRemoveAll.bind(this);
    this.onLoadToDash = this.onLoadToDash.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      files: nextProps.files
    });
  }

  // [obj.path, obj.checked]
  onChangeChecked(fileInfo) {
    if (fileInfo[1]) {
      this.props.removeFile(fileInfo[0]);
    } else {
      this.props.addFile(fileInfo[0]);
    }
  }

  onDrop(files) {
    files = this.state.files.concat(files);
    files = lodash.uniqBy(files, 'path');
    this.props.saveFiles(files);
  }

  onRemove(path) {
    let files = Object.assign({}, this.state.files);
    files = lodash.filter(files, (obj) => {
      return obj.path !== path;
    });

    this.props.saveFiles(files, name);
    this.props.removefromAll(path);
  }

  onRemoveAll() {
    this.props.saveFiles([]);
    this.props.resetData();
  }

  onLoadToDash() {
    this.props.close();
    this.props.getData();
  }

  getFileLists() {
    let files = this.state.files;
    let lists = (
      <span className="list-header">
        Add files to the your list !
      </span>
      );

    if (files.length > 0) {
      lists = files.map((obj, key) => {
        let boxClass = classNames({
          'box-unchecked': !obj.checked,
          'box-checked': obj.checked
        });

        return (
          <div
            key={key}
            className="name-row">
            <div
              className="filename-row"
              onClick={this.onChangeChecked.bind(this, [obj.path, obj.checked])}>
              <span className="filename">
                {obj.name}
              </span>
              <span className={boxClass}>
                {obj.checked ? <span>&#10004;</span> : <span>&nbsp;</span>}
              </span>
            </div>
            <span onClick={this.onRemove.bind(this, obj.path)}className="remove-file">X</span>
          </div>
        );
      });

      lists = (
        <div>
          <div className="list-header">
            <span className="files-select-header">Selected Files</span>
            <span
              onClick={this.onRemoveAll}
              className="remove-all-button">Clear All</span>
          </div>
          {lists}
        { /* <span
            onClick={this.onLoadToDash}
            className="add-all-button">Load Files To Dash</span> */}
        </div>
      );
    }

    return lists;
  }

  render() {
    return (
      <div>
        <div className="loaded-files">
          {this.getFileLists()}
        </div>
        <Dropzone
          className="dropzone"
          disableClick={false}
          disablePreview
          onDrop={this.onDrop}>
          <div className="dropzone-info">Drag and Drop</div>
          <div><i className="fa fa-file-o"></i></div>
          <div className="dropzone-info">Click to
            <span className="dropzone-browse">Browse</span>
          </div>
        </Dropzone>
      </div>
    );
  }
}
