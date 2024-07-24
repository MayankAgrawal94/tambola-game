# Tambola

This project implements a Tambola (Bingo) game claim validator. The validator checks if a player's claim to victory is valid based on the announced numbers and the ticket configuration.

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

## Installation

Clone the repository:

```sh
git clone <repository-url>
cd <repository-directory>
```


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

## Contributing
If you have any suggestions or improvements, feel free to submit a pull request or open an issue.

## Contact
If you have any feedback, questions, or suggestions, feel free to reach out.
connect me at `mnk.agrawal94@gmail.com` or can DM me on [LinkedIn](https://www.linkedin.com/in/er-mayank/).