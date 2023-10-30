const fs = require('fs')

let testResults = JSON.parse(fs.readFileSync('result.json'));
let summary = testResults.result.summary;


let friendlySummary = `Automated unit testing for ${summary.username} (${summary.hostname}) has ${summary.outcome} with ${summary.testsRan} test runs and ${summary.failing} failure(s)`;

console.log(friendlySummary)