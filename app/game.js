class Game {
    constructor(ticket) {
        this.ticket = ticket;
    }
  
    isWinningLine(lineIndex) {
        return this.ticket.numbers[lineIndex].every(num => num === null || this.ticket.isNumberCrossed(num));
    }

    isTopLine() {
        return this.isWinningLine(0);
    }
    
    isMiddleLine() {
        return this.isWinningLine(1);
    }
    
    isBottomLine() {
        return this.isWinningLine(2);
    }
    
    isFullHouse() {
        return this.ticket.numbers.flat().every(num => num === null || this.ticket.isNumberCrossed(num));
    }
    
    isEarlyFive() {
        return Array.from(this.ticket.crossedNumbers).slice(0, 5).length === 5;
    }
}

export default Game;
