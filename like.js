
// Load Liked Items on Liked Page
function loadLikedPage() {
    const likedCards = JSON.parse(localStorage.getItem('likedCards')) || [];
    const container = document.querySelector('.liked');
  
    if (!container) {
      console.error('Container not found in DOM.');
      return;
    }
  // Clear previous content
  
    if (likedCards.length === 0) {
      container.innerHTML = 'Oops, No Likes Yet!!';
      return;
    }
  
    likedCards.forEach(card => {
      const starsHTML = Array(5)
        .fill('<span class="fa fa-star"></span>')
        .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
        .join('');
  
      const cardHTML = `
          <div class="col-4" id="earing">
              <div class="card">
                  <div class="card-inner">
                      <div class="card-front">
                          <div class="outer">
                              <div class="dot"></div>
                              <div class="card">
                                  <div class="ray"></div>
                                  <img src="${card.image}" alt="" class="img-fluid">
                                  <div class="line topl"></div>
                                  <div class="line leftl"></div>
                                  <div class="line bottoml"></div>
                                  <div class="line rightl"></div>
                              </div>
                          </div>
                      </div>
                      <div class="card-back">
                          <div class="outer">
                              <div class="dot"></div>
                              <div class="card">
                                  <div class="ray"></div>
                                  <button class="heart-icon liked" onclick="unlikeCard(${card.id})">
                                      <i class="fa fa-heart"></i>
                                  </button>
                                  <p class="text-white">${card.title}</p>
                                  <p class="text-white">${card.price}</p>
                                  <div class="stars mb-2">
                                      ${starsHTML}
                                  </div>
                                  <button class="cartBtn" onclick="addToCart(${card.id})">
                                    <svg class="cart" fill="white" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                                  ADD TO CART
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" class="product"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"></path></svg>
                                  </button>
                                  <div class="line topl"></div>
                                  <div class="line leftl"></div>
                                  <div class="line bottoml"></div>
                                  <div class="line rightl"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
      container.innerHTML += cardHTML;
    });
  }
  loadLikedPage();


  function unlikeCard(cardId) {
    // Get the list of liked cards from localStorage
    const likedCards = JSON.parse(localStorage.getItem('likedCards')) || [];
    
    // Find the card to remove from the liked list
    const updatedCards = likedCards.filter(card => card.id !== cardId);
    
    // Update localStorage with the new liked cards list
    localStorage.setItem('likedCards', JSON.stringify(updatedCards));
    
    // Remove the card from the DOM immediately
    const cardElement = document.querySelector(`#earing-${cardId}`);
    if (cardElement) {
      cardElement.remove(); // Remove the card from the DOM
    }
    
    // Optionally, you can show an alert
    alert('Card unliked and removed!');
    location.reload(true)

  }
  function searchFunction() {
    event.preventDefault();
    const input = document.getElementById('searchInput').value.toLowerCase();
    const paragraphs = document.querySelectorAll('p');
  
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















