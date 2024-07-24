class Ticket {
    constructor(numbers) {
        this.numbers = numbers; // 2D array representing the ticket
         this.crossedNumbers = new Set(); // Track crossed numbers
    }
  
    crossNumber(number) {
        for (let row of this.numbers) {
            if (row.includes(number)) {
                this.crossedNumbers.add(number);
            }
        }
    }
  
    isNumberCrossed(number) {
        return this.crossedNumbers.has(number);
    }
}  

export default Ticket;
