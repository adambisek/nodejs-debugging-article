import fs from 'fs';
import profiler from 'v8-profiler';

setTimeout(() => { // simply after 10 seconds save profiler result
  const heapSnapshot = profiler.takeSnapshot();
  heapSnapshot.export((err, data) => {
    if (err) return console.error(`Cannot save profiler snapshot: ${err}`);
    fs.writeFileSync('snapshot-heap1.heapsnapshot', data);
    heapSnapshot.delete();
    return console.log('Heap snapshot has been written.');
  });
}, 10000);

// do some your stuff
