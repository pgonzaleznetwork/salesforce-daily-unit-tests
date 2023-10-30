const fs = require('fs')

let testResults = JSON.parse(fs.readFileSync('result.json'));
let summary = testResults.result.summary;
let tests = testResults.result.tests;


let friendlySummary = `Automated unit testing for ${summary.username} (${summary.hostname}) has ${summary.outcome} with ${summary.testsRan} and ${summary.failing} failures`;

let failedTests = '';
let containsFailures = false;

for(const test of tests){

    if(test.Outcome == 'Fail'){
        
        containsFailures = true;

        failedTests += `${test.FullName}\n`
        failedTests += `${test.Message}\n`
        failedTests += `${test.StackTrace}\n`
        failedTests += `\n`
    }
}

let wholeMessage = `${friendlySummary}\n\n${failedTests}`

console.log(wholeMessage)