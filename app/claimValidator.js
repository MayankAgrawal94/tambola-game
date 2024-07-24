import Game from "./game.js";

class ClaimValidator {
    constructor(announcedNumbers, ticket) {
        this.announcedNumbers = announcedNumbers;
        this.ticket = ticket;
        this.game = new Game(ticket);
    }
  
    validateClaim(claim) {
        // Cross all announced numbers on the ticket
        this.announcedNumbers.forEach(number => this.ticket.crossNumber(number));
    
        const lastAnnouncedNumber = this.announcedNumbers[this.announcedNumbers.length - 1];
        const previouslyCrossedCount = this.ticket.crossedNumbers.size - 1;
    
        const checkLastNumber = (lineIndex) => {
            const line = this.ticket.numbers[lineIndex].filter(num => num !== null);
            const allCrossed = line.every(num => this.ticket.isNumberCrossed(num));
            return allCrossed && line.includes(lastAnnouncedNumber) && this.ticket.isNumberCrossed(lastAnnouncedNumber);
        };
  
        switch (claim) {
            case 'Top Row':
                return checkLastNumber(0) ? 'Accepted' : 'Rejected';
            case 'Middle Row':
                return checkLastNumber(1) ? 'Accepted' : 'Rejected';
            case 'Bottom Row':
                return checkLastNumber(2) ? 'Accepted' : 'Rejected';
            case 'Full House':
                return this.game.isFullHouse() && this.ticket.isNumberCrossed(lastAnnouncedNumber) ? 'Accepted' : 'Rejected';
            case 'Early Five':
                return previouslyCrossedCount === 4 && this.ticket.isNumberCrossed(lastAnnouncedNumber) ? 'Accepted' : 'Rejected';
            default:
                return 'Rejected';
        }
    }
}

export default ClaimValidator;
