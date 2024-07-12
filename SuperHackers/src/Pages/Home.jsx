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
        <div className="grid">
        </div>
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
          {/* Add menu content here */}
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

    <div class="container">
      <div class="box1">
        <section id='info'>
        <h3>Store Hours:</h3>
          <p className = "hours" >Sunday: 10am-11pm <br></br>
            Mon-Thurs: 11am-11pm <br></br>
            Fri: 11am-midnight <br></br>
            Sat: 10am-midnight</p> <br></br><br></br>
          <p className="address">471 5th Ave. Brooklyn, NY 11215</p><br></br>
          <p className="phone">718-971-1684</p><br></br>
          <p className="email">sipnplaynyc@gmail.com</p>
        </section>
      </div>       

      <div class="box2">
        <section id='inquiries'>
          <h2>INQUIRIES</h2>
          <label for="Name">Name: </label>
            <input type="text" id="Name" name="Name" placeholder="First and Last"></input> <br></br><br></br>
          <label for="Email">Email: </label>
            <input type="text" id="Email" name="Email" placeholder="abc@domain.com"></input> <br></br><br></br>
          <label for="Message">Message: </label><br></br>
            <textarea id="Message" name="Message" rows="8" cols="50"></textarea>
        </section>
        </div>
       </div>

      </main>
    </div>
  );
}

export default Home;
