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
