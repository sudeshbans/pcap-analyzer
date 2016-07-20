'use strict';
import {
  getData,
  sendData
} from './graph';
import {
  copyToQueue,
  resetQueue,
  resetTemp,
  checkForPathInTemp,
  removeFromQueue,
  removeFromTempAndQueue
} from './Queue';

// Actions
export const SAVED_FILES = 'SAVED_FILES';
export const CHANGED_FILES = 'CHANGED_FILES';

export function saveFiles(files) {
  return (dispatch) => {
    files.forEach((value) => {
      value.checked = typeof (value.checked) === 'boolean' ? value.checked : false;
    });
    dispatch(sendFiles(files));
  };
}

export function resetData() {
  return (dispatch) => {
    let queue = resetQueue();
    resetTemp();
    sendData(dispatch, queue);
  };
}

export function sendFiles(files) {
  return {
    files,
    type: SAVED_FILES
  };
}

function checkedUncheckedFIle(dropbox, path) {
  for (let i = 0; i < dropbox.length; i++) {
    if (dropbox[i].path === path) {
      dropbox[i].checked = !dropbox[i].checked;
      return dropbox[i];
    }
  }
}

export function addFile(path) {
  return (dispatch, getState) => {
    let {
      dropbox,
      graph
    } = getState();

    checkedUncheckedFIle(dropbox, path);
    dispatch({
      files: dropbox,
      type: SAVED_FILES
    });

    let value = checkForPathInTemp(path);
    if (!value) {
      getData(dispatch, path, graph);
    } else {
      sendData(dispatch, copyToQueue(value));
    }
  };
}

export function removefromAll(path) {
  return (dispatch) => {
    let data = removeFromTempAndQueue(path);
    sendData(dispatch, data);
  };
}


export function removeFile(path) {
  return (dispatch, getState) => {
    let {
      dropbox
    } = getState();

    checkedUncheckedFIle(dropbox, path);
    dispatch({
      files: dropbox,
      type: SAVED_FILES
    });
    console.error('get rid of that path', path);
    sendData(dispatch, removeFromQueue(path));
  };
}
