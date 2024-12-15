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
