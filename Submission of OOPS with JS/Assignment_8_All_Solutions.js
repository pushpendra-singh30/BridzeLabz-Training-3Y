// Q1_Student_Result_Processing.js
// Q1: Student Result Processing
class Student {
  constructor(name, marks) { this.name = name; this.marks = marks; }
  calculateAverage() {
    if (!this.marks.length) throw new Error("Marks cannot be empty");
    return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
  }
  getGrade() {
    const avg = this.calculateAverage();
    // Assumed cut-offs: A >= 80, B >= 70, C >= 60, otherwise F.
    if (avg >= 80) return "A";
    if (avg >= 70) return "B";
    if (avg >= 60) return "C";
    return "F";
  }
}
const students = [
  new Student("Rahul", [85, 90, 78, 88]),
  new Student("Priya", [72, 75, 70, 74]),
  new Student("Aman", [45, 55, 50, 48])
];
students.forEach(s => console.log(`${s.name}: Average=${s.calculateAverage().toFixed(2)}, Grade=${s.getGrade()}`));


// Q2_Online_Food_Ordering.js
// Q2: Online Food Ordering
const menu = [
  { name: "Pizza", price: 250 }, { name: "Burger", price: 120 },
  { name: "Pasta", price: 180 }, { name: "Sandwich", price: 100 }
];
function calculateBill(orderItems) {
  const prices = orderItems.map(name => {
    const item = menu.find(m => m.name.toLowerCase() === name.toLowerCase());
    if (!item) throw new Error(`"${name}" is not available on the menu.`);
    return item.price;
  });
  return prices.reduce((total, price) => total + price, 0);
}
try {
  const order = ["Pizza", "Burger", "Pasta"];
  console.log("Order:", order, "Total: ₹" + calculateBill(order));
} catch (err) {
  console.log("Order failed:", err.message);
}
try {
  console.log("Total: ₹" + calculateBill(["Pizza", "Sushi"]));
} catch (err) {
  console.log("Order failed:", err.message);
}


// Q3_Product_Discount_System.js
// Q3: Product Discount System
function Product(name, price) { this.name = name; this.price = price; }
Product.prototype.applyDiscount = function(percent) {
  if (percent < 0 || percent > 100) throw new Error("Discount must be 0-100");
  return this.price - (this.price * percent / 100);
};
const products = [
  { product: new Product("Laptop", 50000), discount: 10 },
  { product: new Product("Headphones", 3000), discount: 20 },
  { product: new Product("Keyboard", 2000), discount: 15 }
];
products.forEach(({product, discount}) =>
  console.log(`${product.name}: ₹${product.price} - ${discount}% = ₹${product.applyDiscount(discount).toFixed(2)}`)
);
// Abstraction: applyDiscount() hides the calculation details from the caller.


// Q4_Employee_Inheritance.js
// Q4: Employee Inheritance and Runtime Polymorphism
class Employee {
  constructor(name, department) { this.name = name; this.department = department; }
  work() { return `${this.name} is doing general ${this.department} work.`; }
}
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); this.teamSize = teamSize;
  }
  work() { return `${this.name} manages ${this.department} and leads ${this.teamSize} employees.`; }
}
const staff = [
  new Employee("Ravi", "Sales"),
  new Manager("Neha", "IT", 8)
];
staff.forEach(person => console.log(person.work()));
// Same method call; output changes according to the object's actual class.


// Q5_Ride_Sharing_Application.js
// Q5: Ride-Sharing Application
class User {
  constructor(name, rating) { this.name = name; this.rating = rating; }
}
class Driver extends User {
  constructor(name, rating, vehicle, vehicleNumber) {
    super(name, rating); this.vehicle = vehicle; this.vehicleNumber = vehicleNumber;
  }
}
class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation; this.toLocation = toLocation; this.distance = distance;
  }
  calculateFare() {
    if (this.distance === undefined || this.distance === null || this.distance === "")
      throw new Error("Trip distance must be provided.");
    if (typeof this.distance !== "number" || !Number.isFinite(this.distance) || this.distance < 0)
      throw new Error("Distance must be a valid non-negative number.");
    const ratePerKm = 10; // Assumption: ₹10 per km.
    return this.distance * ratePerKm;
  }
}
const passenger = new User("Aarav", 4.8);
const driver = new Driver("Suman", 4.9, "Sedan", "UP-XX-1234");
console.log("Passenger:", passenger.name, "Driver:", driver.name, driver.vehicle);
try {
  const trip = new Trip("Station", "City Mall", 12);
  console.log("Fare: ₹" + trip.calculateFare());
} catch (err) { console.log("Trip error:", err.message); }
try {
  const invalidTrip = new Trip("Airport", "Hotel", -5);
  console.log("Fare: ₹" + invalidTrip.calculateFare());
} catch (err) { console.log("Trip error:", err.message); }


// Q6_ECommerce_Inventory_System.js
// Q6: E-Commerce Inventory System
const products = [
  {id:1,name:"Laptop",category:"Electronics",price:50000,stock:4},
  {id:2,name:"Mouse",category:"Electronics",price:800,stock:20},
  {id:3,name:"Notebook",category:"Stationery",price:60,stock:3},
  {id:4,name:"Pen",category:"Stationery",price:20,stock:100},
  {id:5,name:"Chair",category:"Furniture",price:2500,stock:5},
  {id:6,name:"Desk",category:"Furniture",price:7000,stock:2}
];
// Assumption: low stock means 5 or fewer units.
function getLowStockProducts(list) { return list.filter(p => p.stock <= 5); }
function sortProductsByPrice(list) { return [...list].sort((a,b) => a.price - b.price); }
function calculateTotalInventoryValue(list) {
  return list.reduce((sum,p) => sum + p.price * p.stock, 0);
}
function groupByCategory(list) {
  return list.reduce((groups,p) => {
    if (!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
    return groups;
  }, {});
}
console.log("Low stock:", getLowStockProducts(products));
console.log("Sorted by price:", sortProductsByPrice(products));
console.log("Inventory value: ₹" + calculateTotalInventoryValue(products));
console.log("Grouped:", groupByCategory(products));


// Q7_Banking_Application.js
// Q7: Banking Application with Private Field
class BankAccount {
  #balance;
  constructor(initialBalance = 0) {
    if (initialBalance < 0) throw new Error("Initial balance cannot be negative.");
    this.#balance = initialBalance;
  }
  deposit(amount) {
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0)
      throw new Error("Deposit must be a positive number.");
    this.#balance += amount;
    return this.#balance;
  }
  withdraw(amount) {
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0)
      throw new Error("Withdrawal must be a positive number.");
    if (amount > this.#balance) throw new Error("Insufficient balance.");
    this.#balance -= amount;
    return this.#balance;
  }
  getBalance() { return this.#balance; }
}
const account = new BankAccount(1000);
try {
  account.deposit(500);
  console.log("After deposit: ₹" + account.getBalance());
  account.withdraw(300);
  console.log("After withdrawal: ₹" + account.getBalance());
} catch (err) { console.log("Transaction failed:", err.message); }
try {
  account.withdraw(5000);
} catch (err) { console.log("Transaction failed:", err.message); }
// #balance is private and cannot be accessed directly outside the class.


// Q8_Movie_Ticket_Booking.js
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


// Q9_Fitness_App_Analytics.js
// Q9: Fitness App Analytics
const workoutData = [
  {user:"A",steps:8000,calories:300},
  {user:"B",steps:12000,calories:500},
  {user:"C",steps:4000,calories:200}
];
class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length === 0)
      throw new Error("Workout dataset cannot be empty.");
    this.data = data;
  }
  getActiveUsers() { return this.data.filter(person => person.steps > 7000); }
  getAverageCalories() {
    const total = this.data.reduce((sum,person) => sum + person.calories, 0);
    return total / this.data.length;
  }
  getUserSummary() {
    return this.data.map(person =>
      `${person.user} walked ${person.steps} steps and burned ${person.calories} calories.`
    );
  }
}
try {
  const analytics = new FitnessAnalytics(workoutData);
  console.log("Active users:", analytics.getActiveUsers());
  console.log("Average calories:", analytics.getAverageCalories());
  console.log("Summaries:", analytics.getUserSummary());
} catch (err) { console.log("Analytics error:", err.message); }
try {
  new FitnessAnalytics([]);
} catch (err) { console.log("Empty dataset error:", err.message); }
