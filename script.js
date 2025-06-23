let cart = [];

function addToCart(productName, price) {
  const item = { name: productName, price: price };
  cart.push(item);
  updateCartCount();
  alert(`${productName} added to cart!`);
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function viewCart() {
  let cartDetails = "";
  let total = 0;
  if (cart.length === 0) {
    cartDetails = "Your cart is empty!";
  } else {
    cart.forEach((item, index) => {
      cartDetails += `${index + 1}. ${item.name} - ₹${item.price}\n`;
      total += item.price;
    });
    cartDetails += `\nTotal: ₹${total}`;
  }

  alert(cartDetails);
}
