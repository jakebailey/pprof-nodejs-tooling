/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const { writeFileSync } = require('fs');
const { time, encodeSync } = require('pprof');

console.log('Starting time profile');
const stop = time.start();

process.on('exit', () => {
    console.log('Ending time profile');
    const profile = stop();
    const buffer = encodeSync(profile);
    const filename = `pprof-time-profile-${process.pid}.pb.gz`;
    writeFileSync(filename, buffer);
    console.log(`Wrote profile to ${filename}`);
});
