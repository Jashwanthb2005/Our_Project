import React, { useState } from "react";
import "./Home.css";
import Button from "./Button";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <nav className="navbar">
          <a href="/" className="logo">
            <span className="material-symbols-outlined">eco</span>Groot
            <span>.</span>
          </a>
          <ul className={`menu-links ${menuOpen ? "active" : ""}`}>
            <span
              id="close-menu-btn"
              className="material-symbols-outlined"
              onClick={() => setMenuOpen(false)}
            >
              close
            </span>
            {["Home", "Tutorial", "Testimonials", "About Us", "Contact Us"].map(
              (text, index) => (
                <li key={index}>
                  <a href={`/${text.replace(/\s+/g, "").toLowerCase()}`}>
                    {text}
                  </a>
                </li>
              )
            )}
            <li>
              <a href="/" className="login">Login</a>
            </li>
          </ul>
          <span
            id="menu-btn"
            className="material-symbols-outlined"
            onClick={() => setMenuOpen(true)}
          >
            menu
          </span>
        </nav>
      </header>

      <section className="hero-section">
        <div className="content">
          <h1>"Preserve Nature, Boost Productivity"</h1>
          <p>
            Combining AI and agriculture to deliver sustainable, efficient
            disease detection for healthier yields.
          </p>
          <Button />
        </div>
        <div className="image-content large-screen-only">
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dgsr46f8t/image/upload/v1732371915/Remove_background_project_wazekw.png"
              alt="Background"
              className="background-image"
            />
            <img
              src="https://res.cloudinary.com/dgsr46f8t/image/upload/v1732377277/file_1_wyzjpu.png"
              alt="Overlay"
              className="overlay-image"
            />
          </div>
        </div>
      </section>

      <section className="about-us-container">
        <h1>About Us</h1>
        <p>
          At <strong>Groot</strong>, we are committed to revolutionizing
          agriculture through the power of technology. Our platform harnesses
          cutting-edge artificial intelligence to detect plant diseases instantly
          from simple images. Join us in transforming the way we care for plants,
          one leaf at a time.
        </p>
        <div className="mission-points">
          <div className="points-container">
            {[
              "🌱 Preserve Nature: Helping plants thrive by identifying issues early.",
              "🤝 Support Farmers and Gardeners: Providing accessible, accurate insights.",
              "💡 Boost Productivity: Minimizing losses and maximizing yields.",
            ].map((point, idx) => (
              <div className="mission-point" key={idx}>{point}</div>
            ))}
          </div>
          <img
            src="https://res.cloudinary.com/dgsr46f8t/image/upload/v1732435581/-pwC5LXyQJ2KLxAR2wcCA_ml46fg.jpg"
            alt="Mission"
            className="mission-image"
          />
        </div>
      </section>

      <section className="how">
        <h1 className="h1">How it works?</h1>
        <div className="tut-content">
          <video controls>
            <source
              src="https://res.cloudinary.com/dgsr46f8t/video/upload/v1732387114/WhatsApp_Video_2024-11-24_at_00.01.32_8136a6c4_nkzwa0.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      <hr/>
      <section className="testimonial-container">
        <h1>Our users say</h1>
        <div className="testimonial">
          <img
            src="https://res.cloudinary.com/dgsr46f8t/image/upload/v1732430218/IzBd-cyFv13ryq8vRpNV__hblqlp.jpg"
            alt="Testimonial"
            className="test-image"
          />
          <p className="test-para">
            "Groot has been a game-changer for my plant care routine. I’ve seen
            noticeable improvements in my plant health just by following the
            suggested actions. Highly recommended!" -<strong> Sarah T.</strong>
          </p>
        </div>
      </section>
      <hr/>
      <section className="contact-container">
        <div className="contact-card">
          <form className="form-section">
            <h2>Contact Us</h2>
            {["Name", "Email", "Message"].map((field, idx) => (
              <div className="form-group" key={idx}>
                <label htmlFor={field.toLowerCase()}>{field}</label>
                {field === "Message" ? (
                  <textarea
                    id="message"
                    rows="5"
                    placeholder={`Your ${field}`}
                    required
                  />
                ) : (
                  <input
                    type={field.toLowerCase()}
                    id={field.toLowerCase()}
                    placeholder={`Your ${field}`}
                    required
                  />
                )}
              </div>
            ))}
            <button type="submit" className="button">Send Message</button>
          </form>
          <div className="image-section">
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2023/11/contact-us-page-designs-hero.jpg"
              alt="Contact Illustration"
            />
          </div>
        </div>
      </section>

      <footer className="follow-us">
        <h2>Follow Us</h2>
        <div className="social-links">
          {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
            <a
              href="/"
              key={platform}
              className={`social-icon ${platform}`}
              title={`Follow us on ${platform}`}
            >
              <i className={`fab fa-${platform}`}></i>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
