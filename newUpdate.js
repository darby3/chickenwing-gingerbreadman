const moment = require('moment');
const fs = require('fs');

const title = process.argv[2];
const newDate = moment().format("YYYY-MM-DD");

let output = `---
title: TITLE
posted: ${newDate}
daysadd:
  hours: 4
---

`;

fs.writeFile("./articles/" + title + ".md", output, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
