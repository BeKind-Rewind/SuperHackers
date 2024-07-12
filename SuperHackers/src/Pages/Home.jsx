import React from 'react';
import './Home.css';
import Calendar from 'react-calendar'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';



function Home() {
  const [value, onChange] = useState(new Date());

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
  
        <div >
          <h2>Events</h2>
          <div className='container position'>
            <card >
              <span>
                Click date for event information.
              </span>
            </card>
            <card >
              <Calendar onChange={onChange} value={value} />
            </card>
          </div>
          
        </div>


        <section id="games">
          
          <h2>Popular Games</h2>
          <nav>
          <div className = "dropdown">
          <div className = "families">

            <button>Staff Picks for Families</button>
            <ul>
              <li><a href="#">Apples to Apples</a></li>
              <li><a href="#">5 Second Rule</a></li>
              <li><a href="#">Codenames</a></li>
              <li><a href="#">King of Tokyo</a></li>
              <li><a href="#">Sequence</a></li>
              <li><a href="#">Monopoly</a></li>
            </ul>
          </div>
          <div className = "couples">
            <button>Staff Picks for 2 Players</button>
            <ul>
              <li><a href="#">Patchwork</a></li>
              <li><a href="#">Onitama</a></li>
              <li><a href="#">7 Wonders: Duel</a></li>
              <li><a href="#">Stratego</a></li>
              <li><a href="#">Villainous</a></li>
              <li><a href="#">Memoir 44</a></li>
            </ul>
          </div>
          <div className = "hobbyists">
            <button>Staff Picks for Board Game Hobbyists</button>
            <ul>
              <li><a href="#">Arkham Horror LCG</a></li>
              <li><a href="#">Spirit Island</a></li>
              <li><a href="#">Stone Age</a></li>
              <li><a href="#">Survive: Escape from Atlantis!</a></li>
              <li><a href="#">Roll for the Galaxy</a></li>
              <li><a href="#">Agricola</a></li>
            </ul>
            </div>
          </div>
          </nav>
        </section>

        <section id="menu">
          <h2>Menu</h2>
          {/* Add menu content here */}
        </section>

        <div className="contact">
          <h2 className='m-top'>LET'S GET IN TOUCH!</h2>
          <h3 className="m-bottom">Want to join the Sip & Play community? Click here to join in on all the action on discord:</h3>
            <a href="https://discord.gg/bdURvWC" target="_blank">
              <button className="discord m-bottom">
                  Discord Server
              </button>
            </a>
          <h3 className="m-bottom">Follow us on social media to stay up to date on all the fun:</h3>
            <a href="https://www.instagram.com/sipnplaynyc/" target="_blank">
                <button className="instagram m-r">
                    Instagram
               </button> 
            </a>
            <a href="https://www.tiktok.com/@sipnplaynycofficial" target="_blank">
               <button className="tiktok m-left">
                    TikTok
               </button>
            </a>
        </div>

        <div className="container">
          <div className="box1">
            <section id='info'>
              <h3>Store Hours:</h3>
                <p className = "hours" >Sunday: 10am-11pm <br></br>
                  Mon-Thurs: 11am-11pm <br></br>
                  Fri: 11am-midnight <br></br>
                  Sat: 10am-midnight</p> <br></br><br></br><br></br>
              <p className="address">471 5th Ave. Brooklyn, NY 11215</p><br></br>
              <p className="phone">718-971-1684</p><br></br>
              <p className="email">sipnplaynyc@gmail.com</p>
            </section>  
          </div>     

          <div className="box2">
            <section id='inquiries'>
              <h3>INQUIRIES & RESERVATIONS</h3> <br></br>
              <label for="Name">Name: </label>
                <input type="text" id="Name" name="Name" placeholder="First and Last"></input> <br></br><br></br>
              <label for="Email">Email: </label>
                <input type="text" id="Email" name="Email" placeholder="abc@domain.com"></input> <br></br><br></br>
              <label for="Message">Message: </label><br></br>
                <textarea id="Message" name="Message" rows="20" cols="50"></textarea>
            </section>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;
