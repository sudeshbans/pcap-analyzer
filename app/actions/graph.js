'use strict';
import { typeCommand } from '../tshark/terminalAccess';
import {
  copyToQueue,
  getQueue
} from './Queue';
// import _ from 'lodash';
// import allTsharkOptions from '../tshark/tsharkCmds';

// Actions
export const GET_DATA = 'GET_DATA';
export const LOADING = 'LOADING';
export const LOADED = 'LOADED';

export function loading(graph) {
  return {
    type: LOADED,
    data: graph
  };
}

function getTsharkCommand(path) {
  let command = {};
  typeCommand('killall', ['tshark'], null, null, null, []);
  let readFile = '/Users/sudeshbanskota/Downloads/test.pcap';
  command = {
    filePath: readFile,
    main: 'tshark',
    options: ['-q', '-r', path, '-t', 'r', '-z', 'io,stat,1'
    ]
  };

  return command;
}

export function returnData(dispatch, data) {
  dispatch({
    type: LOADED,
    data: copyToQueue(data)
  });
}

export function sendData(dispatch, graph) {
  dispatch({
    type: LOADED,
    data: graph
  });
}

export function getData(dispatch, path, graph) {
  // return function (dispatch, state) {
  const command = getTsharkCommand(path);
  dispatch(loading(graph));
  typeCommand(command.main, command.options, dispatch, returnData, path);
}
