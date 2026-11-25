// Q8: Movie Ticket Booking and Prototype Chain
class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName; this.seatNo = seatNo; this.price = price;
  }
}
MovieTicket.prototype.printTicket = function() {
  console.log("Movie:", this.movieName, "| Seat:", this.seatNo, "| Price: ₹" + this.price);
};
class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price); this.convenienceFee = convenienceFee;
  }
  getTotalAmount() { return this.price + this.convenienceFee; }
}
const ticket = new OnlineTicket("The Adventure", "A12", 200, 25);
ticket.printTicket(); // Inherited from MovieTicket.prototype.
console.log("Convenience fee: ₹" + ticket.convenienceFee);
console.log("Total amount: ₹" + ticket.getTotalAmount());
console.log("printTicket exists:", typeof ticket.printTicket === "function");
