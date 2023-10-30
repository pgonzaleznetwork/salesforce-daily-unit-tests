const fs = require('fs')

let testResults = JSON.parse(fs.readFileSync('result.json'));
let summary = testResults.result.summary;
let tests = testResults.result.tests;


let friendlySummary = `Completed test runs for ${summary.username} (${summary.hostname}) Result: ${summary.outcome} Tests ran: ${summary.testsRan} Failed tests: ${summary.failing}`;

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

let wholeMessage = `${friendlySummary}\n${failedTests}`

console.log(wholeMessage)