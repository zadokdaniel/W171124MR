const products = [
  {
    barCode: "A12334",
    title: "shampoo",
    description: "the best shampoo ever",
    price: 12,
    img: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgwD3KnrTzS6JSFmEFymEG3nxpE9Ktm_nU-Q&s",
      alt: "shampoo",
    },
  },
  {
    barCode: "B12344",
    title: "tea",
    description: "the best tea ever",
    price: 20,
    img: {
      src: "https://media.istockphoto.com/id/587894686/photo/tea-bag-on-background-of-mint-and-and-green-cup.jpg?s=612x612&w=0&k=20&c=bT8ltcCjwb8xeqjBCLJ_CAkIKWOAHhiUKxET1Q4ArYo=",
    },
  },
  {
    barCode: "C4354354",
    title: "sugar",
    description: "the best sugar ever",
    price: 12,
    img: null,
  },
];

let shoppingCartCurrentId = 0;
let shoppingCart = [
  //   {
  //     id: 1,
  //     product: {
  //       barCode: "C4354354",
  //       title: "sugar",
  //       description: "the best sugar ever",
  //       price: 12,
  //       img: null,
  //     },
  //   },
];

function getProducts() {
  return products;
}

function findProduct(barCode) {
  return products.find((product) => product.barCode === barCode);
}

function addToCart(barCode) {
  const product = findProduct(barCode);

  if (!product) {
    throw new Error(`The product with the barcode "${barCode}" was not found`);
  }

  shoppingCart = [
    ...shoppingCart,

    {
      id: shoppingCartCurrentId++,
      product,
    },
  ];
}

function removeFromCart(shoppingCartItemId) {
  shoppingCart = shoppingCart.filter((item) => item.id !== shoppingCartItemId);
}

function getShoppingCart() {
  //   shoppingCart.reduce((sum, item) => sum + item.product.price, 0);

  let sum = 0;
  for (item of shoppingCart) {
    sum += item.product.price;
  }

  return { cartItems: shoppingCart, count: shoppingCart.length, sum };
}
