const allTsharkOptions = {
  noBuffer: '-l',
  insertFiedls: '-T',
  frameTime: 'frame.time_epoch',
  frameLength: 'frame.len',
  singularField: '-e',
  fields: 'fields',
  fieldPrintOption: '-E',
  separatorEqual: 'separator=,',
  yesHeader: 'header=y',
  noHeader: 'header=n',
  noQuote: 'quote=n',
  ringBuffer: '-b',
  filesize: 'duration:5',
  files: 'files:100',
  writeToFile: '-w',
  fileName: './app/tshark/ringbuffer/pcapFiles',
  allOccurances: 'occurrence=a'
};

export default allTsharkOptions;
