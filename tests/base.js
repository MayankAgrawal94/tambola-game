import Main from "../index.js";
import log from "../utils/logging.util.js";

class BaseTest {
    constructor(testCollection) {
        this.tests = testCollection;
        this.testLogs = [];
        this.counts = {
            passed: 0,
            failed: 0
        }
    }

    finalTestLog() {
        log.multiColor([
            { text: '\nTests:', color: null, styles: ['bold','dimmed'] },
            { text: `${this.counts.failed == 0 
                            ? '' 
                            : `${this.counts.failed} failed,`}`,
                color: 'red', styles: ['bold'] },
            { text: `${this.counts.passed == 0 
                            ? '' 
                            : `${this.counts.passed} passed,`}`,
                color: 'green', styles: ['bold'] },
            { text: `${this.tests.length} total`, color: null }
        ]);

        log.multiColor([
            { text: `\nAll test cases completed!\n`, color: null, styles: ['dimmed'] }
        ])
    }

    logTestResult(count, testName, result, expectedResult) {
        log.multiColor([
            { text: `${!count?'\n':''}Test Case ${count+1}:`, color: 'none' },
            { text: `${testName}`, color: 'yellow' },
        ])
        log.multiColor([
            {text: '['},
            {text: 'Output:', styles: ['bold']},
            {text: `${result},`, styles: ['italic']},
            {text: 'Expected Output:', styles: ['bold']},
            {text: expectedResult, styles: ['italic']},
            {text: ']'},
        ])
    }
  
    run() {
        this.tests.forEach((test, index) => {
            const { testName, ticketNumbers, announcedNumbers, claim, expectedResult } = test;

            const result = new Main(ticketNumbers, announcedNumbers, claim).init()
            const testPassed = result === expectedResult;
            
            // logging
            this.logTestResult(index, testName, result, expectedResult)

            this.counts[testPassed ? 'passed' : 'failed'] += 1

            // Future scopes (TODOs)
            this.testLogs.push({
                testName,
                result: testPassed ? 'Passed' : 'Failed',
                details: {
                    ticketNumbers,
                    announcedNumbers,
                    claim,
                    expectedResult,
                    actualResult: result
                }
            });
            
            // logging
            testPassed ? log.success('Passed\n') : log.error('Failed\n')
        });

        this.finalTestLog();
    }
}
  
export default BaseTest;