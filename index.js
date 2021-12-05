const spawn = require("child_process");
const f = require("figlet");
const regex = /temp=([^'C]+)/;
spawn.exec("vcgencmd measure_temp", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
setTimeout(() => {
    const temp = regex.exec(stdout)[1];
    f(temp, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  });

}, 1000);