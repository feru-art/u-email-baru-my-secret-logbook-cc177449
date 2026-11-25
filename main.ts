const { writeFileSync } = require("node:fs");

const logbookLine =
  "Day 96: He typed \"no rush,\" changed it to \"urgent\" 40 seconds later, then asked why I hadn't started.";

writeFileSync("/output/entry.txt", logbookLine, "utf8");
