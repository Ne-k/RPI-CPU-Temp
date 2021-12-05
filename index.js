const spawn = require("child_process");

const regex = /temp=([^'C]+)/;

setTimeout(() => {
  spawn.exec("vcgencmd measure_temp", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    const temp = regex.exec(stdout)[1];
    console.log(temp);
  });

}, 1000);