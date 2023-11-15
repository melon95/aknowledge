export function limitConcurrency(tasks, maxConcurrency, retry = 2) {
  if (maxConcurrency === 0) maxConcurrency = Infinity
  let running = 0;
  let index = 0;
  const results = [];

  return new Promise(resolve => {
    function runTask(i, retryCount = 0) {
      const task = tasks[i]
      running++;
      task().then(result => {
        results[i] = result;
        running--;
        if (index === tasks.length && running === 0) {
          resolve(results);
        } else {
          runNextTask();
        }
      }).catch((err) => {
        running--;
        if (retryCount < retry) {
          runTask(i, retryCount + 1)
        } else {
          results[i] = err;
          if (index === tasks.length && running === 0) {
            resolve(results);
          } else {
            runNextTask();
          }
        }
      })
    }
    function runNextTask() {
      while (running < maxConcurrency && index < tasks.length) {
        runTask(index++);
      }
    }
    runNextTask();
  });
}

