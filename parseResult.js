const fs = require('fs')

let testResults = JSON.parse(fs.readFileSync('result.json'));
let summary = testResults.result.summary;
let tests = testResults.result.tests;

let slackPayload = {
    text: 'Test Runs Finished',
    blocks: []
}

let summaryBlock = {
    type: 'section',
    text: {
        type: 'mrkdwn',
        text: `Automated unit testing for ${summary.username} (${summary.hostname}) has ${summary.outcome} with ${summary.testsRan} test runs and ${summary.failing} failure(s)`
    }
}

slackPayload.blocks.push(summaryBlock);

for(const test of tests){

    if(test.Outcome == 'Fail'){
        
        let block = {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `${test.FullName}: ${test.Message}`
            }
        }

        slackPayload.blocks.push(block);
    }
}

// Convert the object to a JSON string
const jsonData = JSON.stringify(slackPayload); 

// Write the JSON string to the file
fs.writeFileSync('slackPayload.json', jsonData, 'utf-8');
