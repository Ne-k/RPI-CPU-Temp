const spawn = require("child_process").spawn;

const regex = /temp=([^'C]+)/;
const cmd = spawn("/opt/vc/bin/vcgencmd", ["measure_temp"]);

setTimeout(() => {
  cmd.stdout.on("data", (data) => {
    const match = regex.exec(data.toString());
    if (match) {
      console.log(match[1]);
    }
  });
}, 1000);