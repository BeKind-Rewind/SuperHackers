import React from 'react';
import './Home.css';


function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <header className="header">
        <h1>Sip & Play</h1>
        <nav>
          <button className="about-btn" onClick={() => scrollToSection('about')}>About</button>
          <button className="events-btn" onClick={() => scrollToSection('events')}>Events</button>
          <button className="reservations-btn" onClick={() => scrollToSection('reservations')}>Reservations</button>
          <button className="games-btn" onClick={() => scrollToSection('games')}>Games</button>
          <button className="menu-btn" onClick={() => scrollToSection('menu')}>Menu</button>
          <button className="press-btn" onClick={() => scrollToSection('press')}>Press</button>
          <button className="cards-btn" onClick={() => scrollToSection('cards')}>Gift Cards</button>
          <button className="contact-btn" onClick={() => scrollToSection('contact')}>Contact Us</button>
        </nav>

      </header>

      <main>
      <section id="about" className="about-section">
        <h2>About Us</h2>
      </section>

      <section id="owner">
        <p>
        Founder, Jonathan Li, shares a passion for board games, boba, and delicious food, so he combined them all to become Sip & Play, Park Slope’s first board game cafe. 
        It is a straightforward concept, come in with your friends and family to play any board game from our library of 500+ games! 
        We hope when you visit, you also enjoy our coffee, espresso, boba, sandwiches, and snacks!
        </p>
      </section>

        <section id="events">
          <h2>Events</h2>
          <div className="grid">
            <div>
              <h3>Recent challenge results</h3>
              <img src="/path-to-event-image.jpg" alt="event pic" />
            </div>
            <div>
              <h3>Check out our events</h3>
              <img src="/path-to-calendar-image.jpg" alt="event calendar" />
            </div>
          </div>
        </section>

        <section id="reservations">
          <h2>Reservations</h2>
          {/* Add reservation form or information here */}
        </section>

        <section id="games">
          <h2>Games</h2>
          <div className="grid">
            <div>
              <h3>All Ages</h3>
              <img src="/path-to-family-image.jpg" alt="family pic" />
            </div>
          </div>
        </section>

        <section id="menu">
          <h2>Menu</h2>
          <div className="menu-buttons">
            <button className="coffee-btn" onClick={() => scrollToSection('coffee')}>Coffee</button>
            <button className="specialty-btn" onClick={() => scrollToSection('specialty')}>Specialty Drinks</button>
            <button className="boba-btn" onClick={() => scrollToSection('boba')}>Boba</button>
            <button className="hot-bites-btn" onClick={() => scrollToSection('hot-bites')}>Hot Bites</button>
            <button className="sandwiches-btn" onClick={() => scrollToSection('sandwiches')}>Sandwiches & Salad</button>
            <button className="seasonal-btn" onClick={() => scrollToSection('seasonal')}>Seasonal Menu</button>
            <button className="beer-btn" onClick={() => scrollToSection('beer')}>Beer & Wine</button>
          </div>
        </section>



          <div className="App">
            <div className="App-header">
              <h1>Welcome to Sip & Play</h1>
              <div id="model-containers">
                <div id="coffee-shop-cup" className="model-container"></div>
                <div id="iced-coffee" className="model-container"></div>
                <div id="cafe-latte-with-art" className="model-container"></div>
                <div id="boba-tea-cup" className="model-container"></div>
                <div id="bubble-tea-and-cookies" className="model-container"></div>
                <div id="desserts" className="model-container"></div>
              </div>
            </div>
          </div>



        <section id="coffee">
          <h2>Coffee</h2>
          <div class="coffee-menu">
            <div class="coffee-items">
              <p class="item-name">Latte</p>
              <p class="item-name">Cortado</p>
              <p class="item-name">Cafe Au Lait</p>
              <p class="item-name">Cappuccino</p>
              <p class="item-name">Mocha</p>
              <p class="item-name">Red Eye</p>
              <p class="item-name">Americano</p>
              <p class="item-name">Drip Coffee</p>
            </div>
            <div class="coffee-prices">
              <p class="item-price">$4.75 (H) / $5.25 (C)</p>
              <p class="item-price">$4.25 (H) / $4.75 (C)</p>
              <p class="item-price">$3.25 (H)</p>
              <p class="item-price">$4.50 (H)</p>
              <p class="item-price">$5.75 (H) / $6.25 (C)</p>
              <p class="item-price">$4.50 (H) / $4.75 (C)</p>
              <p class="item-price">$3.75 (H) / $4.25 (C)</p>
              <p class="item-price">Small: $3.00 (H) / $3.50 (C)</p>
              <p class="item-price">Medium: $3.50 (H)</p>
              <p class="item-price">Large: $4.00 (H) / $4.25 (C)</p>
            </div>
          </div>
        </section>

        <section id="specialty">
          <h2>Specialty Drinks</h2>
          <div class="menu">
            <div class="menu-items">
              <p class="item-name">Matcha Latte</p>
              <p class="item-name">Lavendar Latte</p>
              <p class="item-name">Nutella Latte</p>
              <p class="item-name">Rose Latte</p>
              <p class="item-name">Chai</p>
              <p class="item-name">Brown Sugar Latte</p>
              <p class="item-name">Dirty Chai</p>
              <p class="item-name">Bumblebee Latte</p>
              <p class="item-name">Hot Chocolate</p>
              <p class="item-name">S'mores</p>
            </div>
            <div class="menu-prices">
              <p class="item-price">$5.25(H)/$5.75(C)</p>
              <p class="item-price">$5.75(H)/$6.25(C)</p>
              <p class="item-price">$5.75(H)/$6.25(C)</p>
              <p class="item-price">$5.75(H)/$6.25(C)</p>
              <p class="item-price">$5.00(H)/$5.50(C)</p>
              <p class="item-price">$5.75(H)/$6.25(C)</p>
              <p class="item-price">$6.25(H)/$6.75(C)</p>
              <p class="item-price">$6.25(H)/$6.75(C)</p>
              <p class="item-price">$4.50(H)</p>
              <p class="item-price">$5.50</p>
            </div>
          </div>
        </section>

        <section id="boba">
          <h2>Boba</h2>
          <div class="menu">
            <div class="menu-items">
              <p class="item-name">The OG</p>
              <p class="item-name">Brown Sugar Boba</p>
              <p class="item-name">Taro Boba Coconut Boba</p>
              <p class="item-name">Fruit Green/Black Tea</p>
              <p class="item-name">Fruit Black Tea</p>
              <p class="item-name">Jasmine Milk Tea</p>
              <p class="item-name">Wintermelon Milk Tea</p>
              <p class="item-name">Toppings</p>
            </div>
            <div class="menu-descriptions">
              <p class="item-description">Classic milk tea</p>
              <p class="item-description">Caffeine free</p>
              <p class="item-description">Caffeine free, dairy free</p>
              <p class="item-description">Comes in a variety of flavors: mango/strawberry/passionfruit/peach/green apple/lychee/kiwi. Feel free to mix and match!</p>
              <p class="item-description">Comes in a variety of flavors: peach/strawberry. Feel free to mix and match!</p>
              <p class="item-description"></p>
              <p class="item-description">Dairy free</p>
              <p class="item-description">Tapioca pearls, lychee jelly, mixed jelly, grass jelly, pop strawberry, pop passionfruit, mango stars</p>
            </div>
            <div class="menu-prices">
              <p class="item-price">Medium: $4.25<br />Large: $5.25<br />Hot: $5.25</p>
              <p class="item-price">Medium: $4.75<br />Large: $5.75<br />Hot: $5.75</p>
              <p class="item-price">Medium: $4.25<br />Large: $5.25<br />Hot: $5.25</p>
              <p class="item-price">Medium: $4.25<br />Large: $5.25</p>
              <p class="item-price">Medium: $4.25<br />Large: $5.25</p>
              <p class="item-price">Medium: $4.25<br />Large: $5.25<br />Hot: $5.25</p>
              <p class="item-price">Medium: $4.25<br />Large: $5.25<br />Hot: $5.25</p>
              <p class="item-price">+$0.50</p>
            </div>
          </div>
        </section>

        <section id="hot-bites">
          <h2>Hot Bites</h2>
          <div class="menu">
            <div class="menu-items">
              <p class="item-name">Chicken Poppers</p>
              <p class="item-name">Mozz Sticks</p>
              <p class="item-name">Pigs in a Blanket</p>
              <p class="item-name">Tater Tots</p>
              <p class="item-name">Chicken Tenders</p>
              <p class="item-name">Onion Rings</p>
              <p class="item-name">Fries</p>
              <p class="item-name">Sweet Potato Fries</p>
            </div>
            <div class="menu-prices">
              <p class="item-price">$6.00</p>
              <p class="item-price">$7.00</p>
              <p class="item-price">$7.00</p>
              <p class="item-price">$5.00</p>
              <p class="item-price">$8.00</p>
              <p class="item-price">$5.00</p>
              <p class="item-price">$5.00</p>
              <p class="item-price">$6.00</p>
            </div>
          </div>
        </section>

        <section id="sandwiches">
        <h2>Sandwiches & Salads</h2>
        <div class="menu">
          <div class="menu-items">
            <p class="item-name">Beyond Bussin Sandwich</p>
            <p class="item-name">Spicy Chicken Sandwich</p>
            <p class="item-name">Italian Panini</p>
            <p class="item-name">Tuna Melt</p>
            <p class="item-name">Zesto Chicken Sandwich</p>
            <p class="item-name">Turkey Club</p>
            <p class="item-name">Grilled Cheese</p>
            <p class="item-name">Mixed Green Salad</p>
            <p class="item-name">Cobb Salad</p>
            <p class="item-name">Pizza Panini</p>
            <p class="item-name">Smoked Salmon Tartine</p>
            <p class="item-name">Avocado Toast</p>
          </div>
          <div class="menu-descriptions">
            <p class="item-description">SHEEESH! Our new VEGAN sandwich highlighting the beyond burger and our house-made vegan chipotle aioli alongside lettuce, onion, and avocado. Comes with a side of our house-made chipotle aioli and chips</p>
            <p class="item-description">Spicy mayo, grilled chicken, crispy bacon, and avocado on Italian herb focaccia. Comes with chips</p>
            <p class="item-description">Prosciutto, pesto, and mozzarella in between herb focaccia and pressed til golden brown and crispy (pesto contains pine nuts). Comes with chips</p>
            <p class="item-description">House-made tuna salad with American cheese on Italian herb focaccia pressed to perfection (can be spicy on request). Comes with chips</p>
            <p class="item-description">Basil pesto, grilled chicken, fresh mozzarella, and lemon zest on Italian herb focaccia (pesto contains pine nuts). Comes with chips</p>
            <p class="item-description">Roast turkey, lettuce, tomato, crispy bacon, and American cheese on sourdough. Comes with chips</p>
            <p class="item-description">Comes with chips. +bacon/tomato/turkey: $1.50</p>
            <p class="item-description">w/tomato, vegan. +smoked salmon: $5.00, +boiled egg: $1.00, +avocado: $1.50</p>
            <p class="item-description">Romaine lettuce, bacon, egg, chicken, tomato, and avocado tossed with ranch</p>
            <p class="item-description">Pepperoni, fresh mozzarella, marinara, and olive oil on Italian herb focaccia and pressed to perfection! Comes with chips</p>
            <p class="item-description">Lemon zest infused cream cheese on toasted heritage wheat. Piled high with smoked salmon and topped with pickled red onion. Comes with a side salad</p>
            <p class="item-description">Avocado mashed with salt, pepper, lemon juice, and olive oil on toasted heritage wheat. Comes with a side salad. +egg: $1</p>
          </div>
          <div class="menu-prices">
            <p class="item-price">$15.00</p>
            <p class="item-price">$13.00</p>
            <p class="item-price">$11.00</p>
            <p class="item-price">$11.00</p>
            <p class="item-price">$13.00</p>
            <p class="item-price">$11.00</p>
            <p class="item-price">$6.50</p>
            <p class="item-price">$6.50</p>
            <p class="item-price">$10.00</p>
            <p class="item-price">$11.00</p>
            <p class="item-price">$11.00</p>
            <p class="item-price">$10.00</p>
          </div>
        </div>
      </section>

      <section id="seasonal">
        <h2>Seasonal Menu</h2>
        <div class="menu">
          <div class="menu-items">
            <p class="item-name">Pina Colada</p>
            <p class="item-name">Matcha Lemonade</p>
            <p class="item-name">Yuzu-Ade</p>
            <p class="item-name">Freshly Squeezed Lemonade</p>
            <p class="item-name">Matcha Lavendar Oat</p>
            <p class="item-name">Berry Lavendar Lemonade</p>
            <p class="item-name">Citrus Boba (Grapefruit or Orange)</p>
            <p class="item-name">Rotating Beer/Wine Program</p>
          </div>
          <div class="menu-descriptions">
            <p class="item-description">Our coconut boba with pineapple flavor!</p>
            <p class="item-description">Our freshly squeezed lemonade with a balance of an earthy shot of matcha</p>
            <p class="item-description">Popular in South Korea, Yuzu-Ade is a carbonated drink with yuzu marmalade. Yuzu is a citrus with a tart and fragrant flavor of orange and grapefruit.</p>
            <p class="item-description">Real lemons with our signature recipe = amazing lemonade</p>
            <p class="item-description">Lavender infused into our oatmilk steamed over a matcha shot.</p>
            <p class="item-description">Made with real bourbon and definitely the drink we're most excited for this fall.</p>
            <p class="item-description">Made with real fruit juice and fruit slices!</p>
            <p class="item-description">Check out our beer and wine at the front of our store! We're constantly rotating out product from local breweries!</p>
          </div>
          <div class="menu-prices">
            <p class="item-price">$4.75 (M) / $5.75 (L)</p>
            <p class="item-price">Medium: $5.00<br />Large: $6.00</p>
            <p class="item-price">Large: $5.25</p>
            <p class="item-price">Medium: $4.00<br />Large: $5.00</p>
            <p class="item-price">$6.50</p>
            <p class="item-price">Medium: $5.25<br />Large: $6.25</p>
            <p class="item-price">Large: $6.00</p>
            <p class="item-price">Varies</p>
          </div>
        </div>
      </section>

      <section id="beer">
        <h2>Beer & Wine</h2>
        <div class="menu">
          <div class="menu-items">
            <p class="item-name">Main lineup:</p>
            <p class="item-name">Babe Rose</p>
            <p class="item-name">Archer Roose White/Red</p>
            <p class="item-name">Kona Lager</p>
            <p class="item-name">Blue Point</p>
            <p class="item-name">Juneshine</p>
            <p class="item-name">Lunar Hard Seltzers</p>
            <p class="item-name">Allagash White</p>
            <p class="item-name">Rotating menu of beers from local breweries!<br />(tall silver cans on our counter)</p>
          </div>
          <div class="menu-prices">
            <p class="item-price"></p>
            <p class="item-price">Doc Cider</p>
            <p class="item-price">Stella Artois</p>
            <p class="item-price">Shocktop</p>
            <p class="item-price">Finback</p>
            <p class="item-price">Three's Brewery</p>
          </div>
        </div>
      </section>





        <section id="press">
          <h2>Press</h2>
          {/* Add press content here */}
        </section>

        <section id="cards">
          <h2>Gift Cards</h2>
          {/* Add gift card content here */}
        </section>

        <section id="contact">
          <h2>LET'S GET IN TOUCH! </h2>
          <h3>Want to join the Sip & Play community? Click here to join in on all the action on discord:</h3>
            <a href="https://discord.gg/bdURvWC" target="_blank">
              <button className="discord">
                  Discord Server
              </button>
            </a>
          <h3>Follow us on social media to stay up to date on all the fun:</h3>
            <a href="https://www.instagram.com/sipnplaynyc/" target="_blank">
                <button className="instagram">
                    Instagram
               </button> 
            </a>
            <a href="https://www.tiktok.com/@sipnplaynycofficial" target="_blank">
               <button className="tiktok">
                    TikTok
               </button>
            </a>
        </section>

        <section id='info'>
          <p className="address">471 5th Ave. Brooklyn, NY 11215</p>
          <p className="phone">718-971-1684</p>
          <p className="email">sipnplaynyc@gmail.com</p>
        </section>       

        <section id='inquiries'>
          <h2>INQUIRIES</h2>
          <label for="Name">Name: </label>
            <input type="text" id="Name" name="Name" placeholder="First and Last"></input> <br></br><br></br>
          <label for="Email">Email: </label>
            <input type="text" id="Email" name="Email" placeholder="abc@domain.com"></input> <br></br><br></br>
          <label for="Message">Message: </label><br></br>
            <textarea id="Message" name="Message" rows="8" cols="50"></textarea>
        </section>
        
      </main>
    </div>
  );
}

export default Home;