const log = require("fancy-log");
const chalk = require("ansi-colors");
const notifier = require("node-notifier");

const shellPrefix = "$";

function drawFlag() {
  // American Flag in ASCII
  //
  log("");
  log("* * * * * ========================");
  log("* * * * * ========================");
  log("* * * * * ========================");
  log("* * * * * ========================");
  log("==================================");
  log("==================================");
  log("==================================");
  log("");
}

function notify(title, message, wait) {
  notifier.notify({
    title: title,
    message: message,
    icon: "assets/img/favicons/favicon-192.png",
    wait: wait,
  });
}

module.exports = {
  logIntroduction: function (message) {
    message = message || "U.S. Web Design System Documentation";

    log(message);
    drawFlag();
  },

  logCommand: function (name, message) {
    log(shellPrefix, chalk.cyan(name), chalk.magenta(message));
  },

  logHelp: function (name, message) {
    log(shellPrefix, chalk.cyan(name), chalk.yellow(message));
  },

  logData: function (name, message) {
    log(chalk.cyan(name), chalk.yellow(message));
  },

  logError: function (name, message) {
    log(chalk.red(name), chalk.yellow(message));
    notify("gulp: " + name, message, true);
  },

  logMessage: function (name, message) {
    log(chalk.cyan(name), chalk.green(message));
    notify("gulp: " + name, message, false);
  },
};
