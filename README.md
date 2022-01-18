# DEPRECATED: use pprof-it!

This repo has been deprecated in favor of [pprof-it](https://www.npmjs.com/package/pprof-it),
which should do everything this project did, better.

# pprof-nodejs-tooling

Handy helpers for using pprof with node. To use, clone and `yarn install` this
somewhere, then run your program like so:

```sh
# Capture a time profile.
$ node --require /path/to/pprof-node-tooling/pprofTime.js someScript.js
# Capture a heap allocation profile.
$ node --require /path/to/pprof-node-tooling/pprofHeap.js someScript.js
```

Profiles will be captured from program start to end, and profiles will appear
in the current working directory.

This is similar to using `--require pprof` (as node-pprof's docs suggest),
but supports heap profiling and doesn't require the package being profiled
to have `pprof` installed.
