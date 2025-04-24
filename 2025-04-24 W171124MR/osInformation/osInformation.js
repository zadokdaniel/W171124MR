const os = require("node:os"); // core modules

function getOSRunTime() {
  return os.uptime() / 60;
}

function getMemory() {
  const total = os.totalmem() / 1024 / 1024;
  const free = os.freemem() / 1024 / 1024;
  const percentage = (free / total) * 100;

  return {
    total,
    free,
    percentage,
  };
}

module.exports = {
  getOSRunTime,
  getMemory,
};
