let Queue = [];
let TempHold = [];

export function copyToTempHold(item) {
  TempHold.push(item);
  return TempHold;
}

export function checkForPathInTemp(path) {
  let value = TempHold.find((queueValue) => {
    return queueValue.path === path;
  });

  // Lets remove this from our temp hold
  if (value) {
    TempHold = TempHold.filter((queueValue) => {
      return queueValue.path !== path;
    });
  }

  return value;
}

export function copyToQueue(item) {
  Queue.push(item);
  return Queue;
}

export function removeFromQueue(path) {
  Queue = Queue.filter((queueValue) => {
    if (queueValue.path === path) {
      copyToTempHold(queueValue);
    }
    return queueValue.path !== path;
  });

  return Queue;
}

export function resetQueue() {
  Queue = [];
  return Queue;
}

export function resetTemp() {
  TempHold = [];
  return TempHold;
}

export function removeFromTempAndQueue(path) {
  Queue = Queue.filter((queueValue) => {
    return queueValue.path !== path;
  });

  TempHold = TempHold.filter((queueValue) => {
    return queueValue.path !== path;
  });

  return Queue;
}

export function getTempDataHolder() {
  return TempHold;
}

export function getQueue() {
  return Queue;
}
