let insertQueue = [], i = 0, insertBefore, timestamp;

function insert () {
  clearTimeout(timestamp)
  const task = insertQueue.shift();
  if (task) {
    console.log(...task)
    // insertBefore.call(...task);
    setTimeout(insert, 1000);
  }
}

function setTask () {
  if (timestamp) {
    clearTimeout(timestamp);
  }
  timestamp = setTimeout(() => {
    setTask();
    insert();
  }, 100);
}

export const hackInsertBefore = function () {
  // 过于麻烦，放弃实现
  insertBefore = document.__proto__.__proto__.__proto__.insertBefore
  document.__proto__.__proto__.__proto__.insertBefore = function(){
    console.log(this, ...arguments);
    insertQueue.push([this, ...arguments]);
    insertBefore.call(this, ...arguments)
    setTask();
  }
}
