/*
let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = slides.length - 1;
  if (currentIndex >= slides.length) currentIndex = 0;

  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}






let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.textContent = `${item.name} - €${item.price}`;
    cartContainer.appendChild(cartItem);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('cart-total').textContent = `Total: €${total}`;
}
*/