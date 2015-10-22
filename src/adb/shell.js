let debug = console.log.bind(console, '[adb/pull]');
let exec = require('mz/child_process').exec;

module.exports = function shell(shellCmd) {
  let command = `adb shell "${shellCmd}"`;
  debug(command);
  return exec(command);
};