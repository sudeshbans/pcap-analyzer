'use strict';

let procs = require('child_process').spawn;
let utils = require('../utils/utils');

function startCapture(cmd, options) {
  console.log(cmd);
  utils.rmDir('./ringbuffer', false);
  let process = procs(cmd, options);

  process.stdout.setEncoding('utf8');
  process.stdout.on('data', (data) => {
    console.log('did i get data', data);
  });

  process.stderr.setEncoding('utf8');
  process.stderr.on('data', (data) => {

  });

  process.on('close', (data) => {
  });
}

startCapture('tshark',  ["-b", "filesize:100", "-b",
"files:100", "-w", "./ringbuffer/pcapFiles"]);
