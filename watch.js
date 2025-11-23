const { exec } = require("child_process");
const fs = require("fs");

console.log("Watching LESS files...");

fs.watch("less", { recursive: true }, () => {
  exec("lessc less/racing.less css/style.css", (err) => {
    if (err) console.error("Compile error:", err);
    else console.log("Recompiled");
  });
});
