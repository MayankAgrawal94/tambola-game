import ClaimValidator from "./app/claimValidator.js";
import Ticket from "./app/ticket.js";

class Main {
    constructor(ticketNumbers, announcedNumbers, claim){
        this.ticket = new Ticket(ticketNumbers);
        this.claimValidator = new ClaimValidator(announcedNumbers, this.ticket);
        this.claim = claim
    }

    init() {
        return this.claimValidator.validateClaim(this.claim);
    }
}

export default Main;