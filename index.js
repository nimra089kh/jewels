


// ==============================
// Testimonials Section
// ==============================

const fetchAndRenderCards = async () => {
  try {
    // Fetch JSON Data
    const response = await fetch('cards.json');
    const data = await response.json(); // Parse JSON into an object

    // Access only the 'testimonials' section
    const testimonials = data.testimonials;

    // Get Container
    const container = document.querySelector('.testimonials');

    // Loop Through Each Testimonial and Render
    testimonials.forEach(card => {
      const starsHTML = Array(5)
        .fill('<span class="fa fa-star"></span>')
        .map((star, index) => index < card.stars ? star.replace('fa-star', 'fa-star checked') : star)
        .join('');

      const cardHTML = `
        <div class="hover-card">
          <div class="card-content">
            <img src="${card.image}" alt="${card.name}">
            <p class="name">${card.name}</p>
            <div class="stars">
              ${starsHTML}
            </div>
            <div class="contentt">
              <h6>${card.name}</h6>
              <p class="text-white">"${card.quote}"</p>
            </div>
          </div>
        </div>
      `;

      container.innerHTML += cardHTML;
    });
  } catch (error) {
    console.error('Error fetching JSON data:', error);
  }
};

// Call the Function
fetchAndRenderCards();

// ==============================
// Scroll Behavior (Back to Top Button)
// ==============================

window.onscroll = function() {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Scroll smoothly to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function searchFunction() {
  event.preventDefault();
  const input = document.getElementById('searchInput').value.toLowerCase();
  const paragraphs = document.querySelectorAll('p','a');
  

  // If input is empty, remove highlights and return
  if (input === '') {
    paragraphs.forEach(p => p.classList.remove('highlight'));
    return;
  }

  paragraphs.forEach(p => {
    if (p.innerHTML.toLowerCase().includes(input)) {
      p.classList.add('highlight'); // Highlight matching text
    } else {
      p.classList.remove('highlight');
    }
  });
}

document.querySelectorAll('.act').forEach(item => {
  item.addEventListener('click', function() {
      // Remove active class from all nav items
      document.querySelectorAll('.act').forEach(i => i.classList.remove('active'));

      // Add active class to the clicked item
      item.classList.add('active');
  });
});
