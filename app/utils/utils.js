'use strict';
const fs = require('fs');

function arrayFromString(string) {
  string = string.split(' ');
  return string;
}

function rmDir(dirPath, removeSelf) {
  let files;
  if (removeSelf === undefined) {
    removeSelf = true;
  }
  try {
    files = fs.readdirSync(dirPath);
  } catch (e) {
    console.error(e, 'error');
    return
  }
  if (files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      let filePath = `${dirPath}/${files[i]}`;
      if (fs.statSync(filePath).isFile()) {
        rmFile(filePath);
      } else {
        rmDir(filePath);
      }
    }
  }

  if (removeSelf) {
    fs.rmdirSync(dirPath);
  }
}

function rmFile(path) {
  fs.unlinkSync(path);
}

const utils = {
  rmDir,
  rmFile
};

module.exports = utils;
