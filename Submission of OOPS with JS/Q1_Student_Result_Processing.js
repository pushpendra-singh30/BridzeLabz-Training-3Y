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
