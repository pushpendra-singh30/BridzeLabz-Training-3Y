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
