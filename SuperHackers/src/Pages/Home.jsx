import React from 'react';
import './Home.css'; 

function Home(){
const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="home">
    <header className="header">
      <h1>Sip N Play</h1>
      <nav>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('menu')}>Menu</button>
        <button onClick={() => scrollToSection('events')}>Events</button>
        <button onClick={() => scrollToSection('reservations')}>Reservations</button>
        <button onClick={() => scrollToSection('games')}>Games</button>
        <button onClick={() => scrollToSection('contact')}>Contact Us</button>
      </nav>
    </header>

    <main>
      <section id="about">
        <h2>About Us</h2>
        <div className="grid">
          <div>
            <h3>Coffee stuff</h3>
            <img src="/path-to-coffee-image.jpg" alt="coffee beans" />
          </div>
          <div>
            <h3>Community stuff</h3>
            <img src="/path-to-community-image.jpg" alt="community" />
          </div>
        </div>
      </section>

      <section id="menu">
        <h2>Menu</h2>
        {/* Add menu content here */}
      </section>

      <section id="events">
        <h2>Events</h2>
        <div>
          <h3>Recent challenge results</h3>
          <img src="/path-to-event-image.jpg" alt="event pic" />
        </div>
        <div>
          <h3>Check out our events</h3>
          <img src="/path-to-calendar-image.jpg" alt="event calendar" />
        </div>
      </section>

      <section id="reservations">
        <h2>Reservations</h2>
        {/* Add reservation form or information here */}
      </section>

      <section id="games">
        <h2>Games</h2>
        <div>
          <h3>All Ages</h3>
          <img src="/path-to-family-image.jpg" alt="family pic" />
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>471 5TH AVE. BROOKLYN, NY 11215</p>
        <p>718-971-1684</p>
        <p>SIPNPLAYNYC@GMAIL.COM</p>
      </section>
    </main>
  </div>
);
}

export default Home;