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
