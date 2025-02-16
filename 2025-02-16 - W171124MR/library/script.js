const products = [
  { title: "shampoo", description: "hello", price: 25, discount: 0.2 },
  { title: "shampoo1", description: "hello", price: 45, discount: 0.15 },
  { title: "shampoo2", description: "hello", price: 15, discount: 0.2 },
  { title: "shampoo3", description: "hello", price: 16, discount: 0.1 },
];

function addCoupon() {
  products[0].discount = 0.5;
}

function renderProduct(product) {
  return `
     <div class="product">
      <h1>${product.title}</h1>
      <p>${product.description}</p>
      <div>
        <span class="price">${product.price}</span>
        <span class="discount">${product.discount * 100}%</span>
      </div>
      <div>
        <button>-</button>
        <input type="number" />
        <button>+</button>
      </div>
    </div>
    `;
}

for (const product of products) {
  document.body.innerHTML += renderProduct(product);
}
