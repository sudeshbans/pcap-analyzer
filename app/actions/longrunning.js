'use strict';
const lodash = require('lodash');

function getProperTime(time1, time0) {
  console.log(time1, time0);
  let result = time1 - time0;
  return result;
}
process.on('message', (packetHeader) => {
  let arrays = [791615, 14261];
  let newPackets = [];
  for (let i = 0; i < arrays.length; i++) {
    newPackets.push([]);
    for (let j = 0; j < arrays[i].length; j++) {
      // if (newPackets[i].length === 0) {
      //   newPackets[i].push({
      //     time: 0,
      //     length: packetHeader[i][j].originalLength
      //   });
      //   continue;
      // } else {
      //   let result = getProperTime(packetHeader[i][j].timestampSeconds,
      //     packetHeader[i][j - 1].timestampSeconds);
      //   if (result) {
      //     newPackets[i].push({
      //       time: result,
      //       length: packetHeader[i][j].originalLength
      //     });
      //   } else {
      //     newPackets[i][newPackets[i].length - 1].length += packetHeader[i][j].originalLength;
      //   }
      // }
    }
  }
  process.send(newPackets);
  //process.exit(0);
});
