import {
  addToCart,
  getProducts,
  getShoppingCart,
  removeFromCart,
} from "./shoppingCart.js";

const DEFAULT_IMAGE =
  "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg";

const $productsList = document.getElementById("products-list");
const $shoppingCart = document.getElementById("shopping-cart");

$productsList.addEventListener("click", (e) => {
  const productElement = e.target.closest(".product");
  if (!productElement) {
    return;
  }

  const barcode = productElement.dataset.barcode;

  if (e.target.classList.contains("add")) {
    handleAddToCart(barcode);
  }
});

$shoppingCart.addEventListener("click", (e) => {
  // find the whole item card - if don't exist cancel operation
  // use data-* attribute to find the id of that item
  // findout which operation is being done
  // run for each operation the right function
});

init();

function handleAddToCart(barcode) {
  addToCart(barcode);
  updateShoppingCart();
}

function handleRemoveFromCart() {}

function init() {
  updateProductsList();
  updateShoppingCart();
}

function updateProductsList() {
  $productsList.innerHTML = renderProductsList(getProducts());
}
function updateShoppingCart() {
  $shoppingCart.innerHTML = renderShoppingCart(getShoppingCart());
}

function renderProductsList(products) {
  let html = "";
  for (const product of products) {
    html += renderProduct(product);
  }

  return html;
}

function renderProduct({ barCode, title, description, price, img }) {
  //   const barCode = arguments[0].barCode;
  //   const title = arguments[0].title

  return `
    <div data-barcode="${barCode}" class="product card d-flex align-items-center p-2" style="width: 200px">
        <img
            style="width: 100px"
            src="${img?.src ?? DEFAULT_IMAGE}"
            class="card-img-top image-fluid"
            alt="${img?.alt ?? title}"
        />
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text">
                <span class="fw-bold">Price:</span> <span>${price.toFixed(
                  2
                )}$</span>
            </p>
            <button class="add btn btn-primary">Add To Cart</button>
        </div>
    </div>
    `;
}

function renderShoppingCart(shoppingCart) {
  if (shoppingCart.count === 0) {
    return `
    <div class="text-center fw-bold fs-3 text-danger my-5">
        No items yet!
    </div>
    `;
  }

  let html = "";
  for (const item of shoppingCart.cartItems) {
    html += renderShoppingCartItem(item);
  }

  return `
    ${html}
    <div
    class="d-flex justify-content-between border-top border-3 border-primary mt-4 py-2 fs-5"
    >
        <div>
            <span class="fw-bold">${shoppingCart.sum.toFixed(2)}</span>
            <span>$</span>
        </div>
        <div>
            <span class="fw-bold">${shoppingCart.count}</span>
            <span>items</span>
        </div>
    </div>
    
    `;
}

function renderShoppingCartItem({
  id,
  product: { barCode, title, description, price, img },
}) {
  return `
    <div class="d-flex align-items-center border-top py-2">
        <img
            style="height: 50px; width: 50px"
            src="${img?.src ?? DEFAULT_IMAGE}"
            class="card-img-top"
            alt="${img?.alt ?? title}"
        />
        <div class="px-2 flex-fill">
            <p class="m-0 fw-bold">${title}</p>
            <p class="m-0">${price.toFixed(2)}$</p>
        </div>
        <div>
            <button class="btn btn-sm btn-outline-danger">
                <i class="bi bi-dash"></i>
            </button>
        </div>
    </div>
    `;
}
