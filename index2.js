import fs from 'fs';
import profiler from 'v8-profiler';

profiler.startProfiling('1', true);

setTimeout(() => { // simply after 10 seconds save profiler result
  const profile = profiler.stopProfiling('1');
  profile.export((err, data) => {
    if (err) return console.error(`Cannot save profiler snapshot: ${err}`);
    fs.writeFileSync('snapshot-cpu.cpuprofile', data);
    profile.delete();
    return console.log('CPU snapshot has been written.');
  });
}, 10000);

// do some stuff
