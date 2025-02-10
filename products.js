//  ///////  //
//  //  //  //  //
    // GOLD //
//  //  //  //  //
//  ///////  //
const fetchgoldecards = async () => {
  try {
      const resp = await fetch('cards.json');
      const data = await resp.json();
      const goldecards = data.goldecards;
      const container = document.getElementById('earing-card-container');
      container.innerHTML = ''; // Clear container before adding cards

      goldecards.forEach((card) => {
          const starsHTML = Array(5)
              .fill('<span class="fa fa-star"></span>')
              .map((star, index) =>
                  index < card.rating
                      ? star.replace('fa-star', 'fa-star checked')
                      : star
              )
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
                                  <button class="heart-icon" onclick="toggleLike(${card.id})">
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
          </div>`;
          container.innerHTML += cardHTML;

          markLikedProducts();
      });
  } catch (error) {
      console.error('Error fetching JSON data:', error);
  }
};

const fetchgoldncards = async () => {
try{
    
    const resp = await fetch('cards.json');
    const data = await resp.json();
    const goldecards = data.goldncards;
    const container = document.getElementById('necklace-card-container')

    goldecards.forEach(card => {
        const starsHTML = Array(5)
        .fill('<span class="fa fa-star"></span>')
        .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
        .join('');

        const cardHTML=`
        <div class="col-4" id="necklace">
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
                             <button class="heart-icon" onclick="toggleLike(${card.id})">
                                <i class="fa fa-heart"></i>
                              </button>
                              <p class="text-white">${card.title}</p>
                             <p class="text-white">${card.price}
                             </p>
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
                       </div>
        
        `
        container.innerHTML += cardHTML;
    });
} catch(error){
    console.error('Error fetching JSON data:', error);
}
}
const fetchgoldrcards = async () => {
try{
    
    const resp = await fetch('cards.json');
    const data = await resp.json();
    const goldecards = data.goldrcards;
    const container = document.getElementById('ring-card-container')

    goldecards.forEach(card => {
        const starsHTML = Array(5)
        .fill('<span class="fa fa-star"></span>')
        .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
        .join('');

        const cardHTML=`
        <div class="col-4" id="ring">
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
                           <button class="heart-icon" onclick="toggleLike(${card.id})">
                                <i class="fa fa-heart"></i>
                              </button>
                              <p class="text-white">${card.title}</p>
                             <p class="text-white">${card.price}
                             </p>
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
                       </div>
        
        `
        container.innerHTML += cardHTML;

        markLikedProducts();
    });
} catch(error){
    console.error('Error fetching JSON data:', error);
}
}
const fetchgoldbcards = async () => {
try{
    
    const resp = await fetch('cards.json');
    const data = await resp.json();
    const goldecards = data.goldbcards;
    const container = document.getElementById('bracelet-card-container')

    goldecards.forEach(card => {
        const starsHTML = Array(5)
        .fill('<span class="fa fa-star"></span>')
        .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
        .join('');

        const cardHTML=`
        <div class="col-4" id="bracelet">
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
                             <button class="heart-icon" onclick="toggleLike(${card.id})">
                                <i class="fa fa-heart"></i>
                              </button>
                              <p class="text-white">${card.title}</p>
                             <p class="text-white">${card.price}
                             </p>
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
                       </div>
        
        `
        container.innerHTML += cardHTML;

        markLikedProducts();
    });
} catch(error){
    console.error('Error fetching JSON data:', error);
}
}
fetchgoldecards();
fetchgoldncards();
fetchgoldrcards();
fetchgoldbcards();



//  ///////  //
//  //  //  //  //
    // SILVER //
//  //  //  //  //
//  ///////  //
 
const fetchsilverecards = async () => {
  try{
      
      const resp = await fetch('cards.json');
      const data = await resp.json();
      const silverecards = data.silverecards;
      const container = document.getElementById('searing-card-container')
  
      silverecards.forEach(card => {
          const starsHTML = Array(5)
          .fill('<span class="fa fa-star"></span>')
          .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
          .join('');
  
          const cardHTML=`
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
                              <button class="heart-icon" onclick="toggleLike(${card.id})">
                                  <i class="fa fa-heart"></i>
                                </button>
                                <p class="text-white">${card.title}</p>
                               <p class="text-white">${card.price}
                               </p>
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
                         </div>
          
          `
          container.innerHTML += cardHTML;

          markLikedProducts();
      });
  } catch(error){
      console.error('Error fetching JSON data:', error);
  }
  }
  const fetchsilverncards = async () => {
  try{
      
      const resp = await fetch('cards.json');
      const data = await resp.json();
      const silverecards = data.silverncards;
      const container = document.getElementById('snecklace-card-container')
  
      silverecards.forEach(card => {
          const starsHTML = Array(5)
          .fill('<span class="fa fa-star"></span>')
          .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
          .join('');
  
          const cardHTML=`
          <div class="col-4" id="necklace">
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
                              <button class="heart-icon" onclick="toggleLike(${card.id})">
                                  <i class="fa fa-heart"></i>
                                </button>
                                <p class="text-white">${card.title}</p>
                               <p class="text-white">${card.price}
                               </p>
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
                         </div>
          
          `
          container.innerHTML += cardHTML;

          markLikedProducts();
      });
  } catch(error){
      console.error('Error fetching JSON data:', error);
  }
  }
  const fetchsilverrcards = async () => {
  try{
      
      const resp = await fetch('cards.json');
      const data = await resp.json();
      const silverecards = data.silverrcards;
      const container = document.getElementById('sring-card-container')
  
      silverecards.forEach(card => {
          const starsHTML = Array(5)
          .fill('<span class="fa fa-star"></span>')
          .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
          .join('');
  
          const cardHTML=`
          <div class="col-4" id="ring">
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
                                <button class="heart-icon" onclick="toggleLike(${card.id})">
                                  <i class="fa fa-heart"></i>
                                </button>
                                <p class="text-white">${card.title}</p>
                               <p class="text-white">${card.price}
                               </p>
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
                         </div>
          
          `
          container.innerHTML += cardHTML;

          markLikedProducts();
      });
  } catch(error){
      console.error('Error fetching JSON data:', error);
  }
  }
  const fetchsilverbcards = async () => {
  try{
      
      const resp = await fetch('cards.json');
      const data = await resp.json();
      const silverecards = data.silverbcards;
      const container = document.getElementById('sbracelet-card-container')
  
      silverecards.forEach(card => {
          const starsHTML = Array(5)
          .fill('<span class="fa fa-star"></span>')
          .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
          .join('');
  
          const cardHTML=`
          <div class="col-4" id="bracelet">
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
                               <button class="heart-icon" onclick="toggleLike(${card.id})">
                                  <i class="fa fa-heart"></i>
                                </button>
                                <p class="text-white">${card.title}</p>
                               <p class="text-white">${card.price}
                               </p>
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
                         </div>
          
          `
          container.innerHTML += cardHTML;

          markLikedProducts();
      });
  } catch(error){
      console.error('Error fetching JSON data:', error);
  }
  }
  fetchsilverecards();
  fetchsilverncards();
  fetchsilverrcards();
  fetchsilverbcards();



//  ///////  //
//  //  //  //  //
    // OXIDISED //
//  //  //  //  //
//  ///////  //

const fetchoxidisedecards = async () => {
  try{
      
      const resp = await fetch('cards.json');
      const data = await resp.json();
      const oxidisedecards = data.oxidisedecards;
      const container = document.getElementById('oearing-card-container')
  
      oxidisedecards.forEach(card => {
          const starsHTML = Array(5)
          .fill('<span class="fa fa-star"></span>')
          .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
          .join('');
  
          const cardHTML=`
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
                            <button class="heart-icon" onclick="toggleLike(${card.id})">
                                  <i class="fa fa-heart"></i>
                                </button>
                                <p class="text-white">${card.title}</p>
                               <p class="text-white">${card.price}
                               </p>
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
                         </div>
          
          `
          container.innerHTML += cardHTML;

          markLikedProducts();
      });
  } catch(error){
      console.error('Error fetching JSON data:', error);
  }
  }
  const fetchoxidisedncards = async () => {
  try{
      
      const resp = await fetch('cards.json');
      const data = await resp.json();
      const oxidisedecards = data.oxidisedncards;
      const container = document.getElementById('onecklace-card-container')
  
      oxidisedecards.forEach(card => {
          const starsHTML = Array(5)
          .fill('<span class="fa fa-star"></span>')
          .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
          .join('');
  
          const cardHTML=`
          <div class="col-4" id="necklace">
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
                                <button class="heart-icon" onclick="toggleLike(${card.id})">
                                  <i class="fa fa-heart"></i>
                                </button>
                                <p class="text-white">${card.title}</p>
                               <p class="text-white">${card.price}
                               </p>
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
                         </div>
          
          `
          container.innerHTML += cardHTML;

          markLikedProducts();
      });
  } catch(error){
      console.error('Error fetching JSON data:', error);
  }
  }
  const fetchoxidisedrcards = async () => {
  try{
      
      const resp = await fetch('cards.json');
      const data = await resp.json();
      const oxidisedecards = data.oxidisedrcards;
      const container = document.getElementById('oring-card-container')
  
      oxidisedecards.forEach(card => {
          const starsHTML = Array(5)
          .fill('<span class="fa fa-star"></span>')
          .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
          .join('');
  
          const cardHTML=`
          <div class="col-4" id="ring">
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
                                <button class="heart-icon" onclick="toggleLike(${card.id})">
                                  <i class="fa fa-heart"></i>
                                </button>
                                <p class="text-white">${card.title}</p>
                               <p class="text-white">${card.price}
                               </p>
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
                         </div>
          
          `
          container.innerHTML += cardHTML;

          markLikedProducts();
      });
  } catch(error){
      console.error('Error fetching JSON data:', error);
  }
  }
  const fetchoxidisedbcards = async () => {
  try{
      
      const resp = await fetch('cards.json');
      const data = await resp.json();
      const oxidisedecards = data.oxidisedbcards;
      const container = document.getElementById('obracelet-card-container')
  
      oxidisedecards.forEach(card => {
          const starsHTML = Array(5)
          .fill('<span class="fa fa-star"></span>')
          .map((star, index) => index < card.rating ? star.replace('fa-star', 'fa-star checked') : star)
          .join('');
  
          const cardHTML=`
          <div class="col-4" id="bracelet">
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
                                <button class="heart-icon" onclick="toggleLike(${card.id})">
                                  <i class="fa fa-heart"></i>
                                </button>
                                <p class="text-white">${card.title}</p>
                               <p class="text-white">${card.price}
                               </p>
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
                         </div>
          
          `
          container.innerHTML += cardHTML;

          markLikedProducts();
      });
  } catch(error){
      console.error('Error fetching JSON data:', error);
  }
  }
  fetchoxidisedecards();
  fetchoxidisedncards();
  fetchoxidisedrcards();
  fetchoxidisedbcards();


  
function addToCart(id) {
  // Get cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  fetch('cards.json')
      .then((response) => response.json())
      .then((data) => {
        const combinedarray = [...data.goldecards, ...data.goldncards, ...data.goldrcards, ...data.goldbcards, ...data.silverecards, ...data.silverncards, ...data.silverrcards, ...data.silverbcards, ...data.oxidisedecards, ...data.oxidisedncards, ...data.oxidisedrcards, ...data.oxidisedbcards];
          const card = combinedarray.find((c) => c.id === id);
          console.log("Card:", card);
          if (card) {
              if (!cart.some((item) => item.id === id)) {
                  cart.push(card); // Add to cart
                  localStorage.setItem('cart', JSON.stringify(cart));
                  alert(`${card.title} added to cart!`);
              } else {
                  alert('Item already in cart!');
              }
          } else {
              alert('Item not found!');
          }
      })
      .catch((error) => console.error('Error adding to cart:', error));
}
window.onscroll = function() {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
};
// like
// Check if a card is liked
function isCardLiked(cardId) {
  const likedCards = JSON.parse(localStorage.getItem('likedCards')) || [];
  return likedCards.some(card => card.id === cardId);
}

// Mark already liked products on page load
function markLikedProducts() {
  const likedCards = JSON.parse(localStorage.getItem('likedCards')) || [];

  // Add 'liked' class to already liked buttons
  likedCards.forEach(card => {
    const likeButton = document.querySelector(`.heart-icon[onclick="toggleLike(${card.id})"]`);
    if (likeButton) {
      likeButton.classList.add('liked');
    }
  });
  
}

// Toggle Like Button Functionality
function toggleLike(cardId) {
  const likedCards = JSON.parse(localStorage.getItem('likedCards')) || [];
  const isLiked = isCardLiked(cardId);
  const likeButton = document.querySelector(`.heart-icon[onclick="toggleLike(${cardId})"]`);

  if (isLiked) {
    // Remove the card from liked list
    const updatedCards = likedCards.filter(card => card.id !== cardId);
    localStorage.setItem('likedCards', JSON.stringify(updatedCards));
    likeButton.classList.remove('liked'); // Update button class
    alert('Card removed from likes!');
  } else {
    // Fetch the card data and add it to liked list
    fetch('cards.json')
      .then(response => response.json())
      .then(data => {
        const allCards = [
          ...data.goldecards, ...data.goldncards, ...data.goldrcards,
          ...data.goldbcards, ...data.silverecards, ...data.silverncards,
          ...data.silverrcards, ...data.silverbcards, ...data.oxidisedecards,
          ...data.oxidisedncards, ...data.oxidisedrcards, ...data.oxidisedbcards
        ];
        const card = allCards.find(c => c.id === cardId);
        if (card) {
          likedCards.push(card);
          localStorage.setItem('likedCards', JSON.stringify(likedCards));
          likeButton.classList.add('liked'); // Update button class
          alert(`${card.title} added to likes!`);
        }
      })
      .catch(error => console.error('Error fetching card data:', error));
  }
}
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