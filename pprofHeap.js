/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const { writeFileSync } = require('fs');
const { heap, encodeSync } = require('pprof');

// The average number of bytes between samples.
const intervalBytes = 512 * 1024;

// The maximum stack depth for samples collected.
const stackDepth = 64;

console.log('Starting heap profile');
heap.start(intervalBytes, stackDepth);

process.on('exit', () => {
    console.log('Ending heap profile');
    const profile = heap.profile();
    const buffer = encodeSync(profile);
    const filename = `pprof-heap-profile-${process.pid}.pb.gz`;
    writeFileSync(filename, buffer);
    console.log(`Wrote profile to ${filename}`);
});
