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
