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
