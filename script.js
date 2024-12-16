// JavaScript to make the slider auto-scroll for small screens
const container = document.querySelector('.services-container');
const slides = document.querySelectorAll('.service-card');

// Move the slider automatically every 4 seconds
let currentIndex = 0;

function autoScroll() {
  currentIndex = (currentIndex + 1) % slides.length;
  container.scrollTo({
    left: slides[currentIndex].offsetLeft,
    behavior: 'smooth',
  });
}

// Start auto-scrolling every 4 seconds
setInterval(autoScroll, 4000);



// Array of blog post objects
const blogPosts = [
  {
    title: "5 Tips for a Cozy Living Room",
    description: "Learn how to create a warm and inviting living room with these simple tips.",
    image: "image3.jpeg",
    link: "#"
  },
  {
    title: "Top Trends in Interior Design 2024",
    description: "Explore the latest trends shaping the interior design world this year.",
    image: "blog-img.jpeg",
    link: "#"
  },
  {
    title: "Transform Your Bedroom with Lighting",
    description: "Discover how lighting can completely change the mood of your bedroom.",
    image: "blog-img1.jpeg",
    link: "#"
  }
];

// Get the blog container element
const blogContainer = document.getElementById("blog-container");

// Generate blog cards dynamically
blogPosts.forEach(post => {
  // Create card container
  const card = document.createElement("div");
  card.classList.add("blog-card");

  // Create card content
  card.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <h3>${post.title}</h3>
    <p>${post.description}</p>
    <a href="${post.link}" class="btn">Read More</a>
  `;

  // Append card to container
  blogContainer.appendChild(card);
});


document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset(); // Reset form fields
  } else {
    alert('Please fill in all the fields.');
  }
});


// Get all tabs and categories
const tabs = document.querySelectorAll('.tab');
const categories = document.querySelectorAll('.faq-category');

// Add click event to tabs
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove('active'));
    // Add active class to clicked tab
    tab.classList.add('active');

    // Hide all categories
    categories.forEach((category) => category.classList.remove('active'));
    // Show the category corresponding to the clicked tab
    const target = document.getElementById(tab.getAttribute('data-tab'));
    target.classList.add('active');
  });
});



// Select elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const totalElement = document.querySelector('.total');
const discountElement = document.querySelector('.discount');
const checkoutButton = document.querySelector('.checkout');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update Cart UI
function updateCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;
  let discount = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - $${item.price} 
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  // Calculate discount
  if (total > 500) {
    discount = 0.1 * total; // 10% discount
    discountElement.textContent = `Discount: $${discount.toFixed(2)}`;
  } else {
    discountElement.textContent = '';
  }

  total -= discount;
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Add item to cart
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    const id = productCard.getAttribute('data-id');
    const name = productCard.getAttribute('data-name');
    const price = parseFloat(productCard.getAttribute('data-price'));

    cart.push({ id, name, price });
    updateCart();
  });
});

// Remove item from cart
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Checkout functionality
checkoutButton.addEventListener('click', () => {
  alert('Thank you for your purchase!');
  cart = [];
  updateCart();
});

// Initial cart load
updateCart();



// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

// Show button when scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Scroll to top functionality
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Newsletter Subscription (Demo)
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for subscribing to our newsletter!');
  newsletterForm.reset();
});
