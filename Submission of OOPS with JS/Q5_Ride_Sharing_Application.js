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
