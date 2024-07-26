# Tambola

This project implements a Tambola (Bingo) game claim validator. The validator checks if a player's claim to victory is valid based on the announced numbers and the ticket configuration.

## Prerequisites

The exercise requires [Node.js](https://nodejs.org/en/) to be installed. I recommend using the LTS version >= 16.

## Installation

1. Clone the repository:

    ```sh
    git clone git@github.com:MayankAgrawal94/tambola-game.git
    cd tambola-game
    ```
1. Since no external libraries are used, you can directly run the tests or the main application without needing to run `npm install`.

## Winning pattern

 - Top line: The ticket with all the numbers of the top row crossed fastest
 -  Middle line: The ticket with all the numbers of the middle row crossed fastest
 - Bottom line: The ticket with the numbers of the bottom row crossed fastest
 - Full house: The ticket with all the 15 numbers crossed ﬁrst
 - Early ﬁve: The fastest ticket to have 5 numbers crossed

## Examples

1. Top row win
    <table>
        <thead>
            <tr>
                <th colspan="3" style="text-align: center;font-weight: bold;">Input</th>
            </tr>
            <tr>
                <th>Ticket</th>
                <th>Numbers announced</th>
                <th>Claim being made</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>4,16,_,_48,_63,76,_<br>7,_,23,38,_,52,_,_,80<br>9,_,25,_,_,56,64,_,83</td>
                <td>90, 4, 46, 63, 89, 16, 76, 48</td>
                <td>Top Row</td>
            </tr>
            <tr>
                <td colspan="3" >&nbsp;</td> <!-- Blank row -->
            </tr>
            <tr>
                <td style="font-weight: bold;">Output</td>
                <td colspan="2">Accepted</td>
            </tr>
            <tr>
                <td style="font-weight: bold;">Explanation</td>
                <td colspan="2">Winning pattern: 4, 63, 16, 48, 76</td>
            </tr>
        </tbody>
    </table>


1. Top row win denied due to late claim
    <table>
        <thead>
            <tr>
                <th colspan="3" style="text-align: center;font-weight: bold;">Input</th>
            </tr>
            <tr>
                <th>Ticket</th>
                <th>Numbers announced</th>
                <th>Claim being made</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>4,16,_,_,48,_,63,76,_<br>7,_,23,38,_,52,_,_,80<br>9,_,25,_,_,56,64,_,83</td>
                <td>90, 4, 46, 63, 89, 16, 76, 48, 12</td>
                <td>Top Row</td>
            </tr>
            <tr>
                <td colspan="3" >&nbsp;</td> <!-- Blank row -->
            </tr>
            <tr>
                <td style="font-weight: bold;">Output</td>
                <td colspan="2">Rejected</td>
            </tr>
            <tr>
                <td style="font-weight: bold;">Explanation</td>
                <td colspan="2">The last announced number 12 does not complete the top
                row</td>
            </tr>
        </tbody>
    </table>


## Game Rules

1. System will only return whether a claim is accepted or rejected.
1. A player's claim to victory is only valid if it is made immediately following the announcement of the number that completes their winning sequence.

## Project Structure

```
.
├── app
│   ├── claimValidator.js
│   ├── game.js
│   └── ticket.js
├── index.js
├── package.json
├── README.md
├── tests
│   ├── base.js
│   ├── run.js
│   └── testCollection.js
└── utils
    ├── logging.util.js
    └── terminalStyling.constant.js
```


### Description

- **app/claimValidator.js**: Contains the `ClaimValidator` class which validates the claim based on the announced numbers and the ticket configuration.
- **app/game.js**: Contains the `Game` class which defines the winning conditions for different patterns in Tambola.
- **app/ticket.js**: Contains the `Ticket` class which represents a Tambola ticket and tracks crossed numbers.
- **index.js**: Main entry point for the application. Initializes the `Ticket` and `ClaimValidator` classes.
- **tests/base.js**: Contains the `BaseTest` class which runs the tests and logs the results.
- **tests/run.js**: Script to run all the tests.
- **tests/testCollection.js**: Contains the collection of test cases.
- **utils/logging.util.js**: Utility for logging test results with color coding.
- **utils/terminalStyling.constant.js**: Defines terminal styling constants for colored output.

## Usage
To validate a Tambola claim, you can use the Main class from index.js.

```js
import Main from './index.js';

const ticketNumbers = [
    [4, 16, null, null, 48, null, 63, 76, null],
    [7, null, 23, 38, null, 52, null, null, 80],
    [9, null, 25, null, null, 56, 64, null, 83]
];

const announcedNumbers = [90, 4, 46, 63, 89, 16, 76, 48];
const claim = 'Top Row';

const main = new Main(ticketNumbers, announcedNumbers, claim);
console.log(main.init()); // Output: Accepted
```

### Running Tests

To run the tests, use the following command:

```sh
npm run test
```

The test results will be displayed in the console with colored output indicating success or failure.

## Example Test Collection

Here is an example of the test collection defined in ./tests/testCollection.js:

```js
export const testCollection = [
    {
        testName: 'Top Row Win',
        ticketNumbers: [
            [4, 16, null, null, 48, null, 63, 76, null],
            [7, null, 23, 38, null, 52, null, null, 80],
            [9, null, 25, null, null, 56, 64, null, 83]
        ],
        announcedNumbers: [90, 4, 46, 63, 89, 16, 76, 48],
        claim: 'Top Row',
        expectedResult: 'Accepted'   // 'Accepted' or 'Rejected'
    },
    {
        testName: 'Top Row Win Denied Due to Late Claim',
        ticketNumbers: [
            [4, 16, null, null, 48, null, 63, 76, null],
            [7, null, 23, 38, null, 52, null, null, 80],
            [9, null, 25, null, null, 56, 64, null, 83]
        ],
        announcedNumbers: [90, 4, 46, 63, 89, 16, 76, 48, 12],
        claim: 'Top Row',
        expectedResult: 'Rejected'
    }
];
```

## Contributing
If you have any suggestions or improvements, feel free to submit a pull request or open an issue.

## Contact
If you have any feedback, questions, or suggestions, feel free to reach out.
connect me at `mnk.agrawal94@gmail.com` or can DM me on [LinkedIn](https://www.linkedin.com/in/er-mayank/).