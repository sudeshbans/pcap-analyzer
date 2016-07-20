import {
  spawn
} from 'child_process';

function typeCommand(cmd, options, dispatch, callback, path) {
  let tempQueue = [];

  let process = spawn(cmd, options);
  process.stdout.setEncoding('utf8');
  process.stdout.on('data', (data) => {
    console.warn("incoming data", data);
    data = data.split('\n');
    for (let i = 12; i < (data.length - 2); i++) {
      let split = data[i].split('|');
      let time = split[1].split('<>');
      tempQueue.push({
        time: parseInt(time[0].trim(), 10),
        packets: parseInt(split[2].trim(), 10)
      });
    }

    tempQueue.path = path;
    tempQueue.duration = data[4];
  });

  process.on('close', (data) => {
    console.warn("Pipe Closed", data);
    if (data === 0) {
      if (tempQueue.length === 0) {
        console.error("some error callback");
      } else {
        callback(dispatch, tempQueue);
      }
    }
  });
}

function kill(pid) {
  process.kill(pid, 'SIGINT');
}

const terminal = {
  typeCommand,
  kill
};

export default terminal;
