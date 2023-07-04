import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-sub">
        <p className="footer-sub-heading">
          Joins the Adventure newsletter to recieve our best vacation deals
        </p>
        <p className="section-text">You can unsubscribe at any time.</p>
        <div className="input-area">
          <form action="">
            <input
              type="email"
              className="footer-input"
              name="email"
              placeholder="Your Email"
            />
            <Button className="footer-button" buttonStyle="btn--outline">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-main-link">
        <section className="footer-sub2">
          <h2 className="footer-link">About Us</h2>
          <Link to="/">How its Work</Link>
          <Link to="/">Tesimonials</Link>
          <Link to="/">Career</Link>
          <Link to="/">Investors</Link>
          <Link to="/">Terms of services</Link>
        </section>
        <section className="footer-sub2">
          <h2>Contact Us</h2>
          <Link to="/">Contact</Link>
          <Link to="/">Support</Link>
          <Link to="/">Destinations</Link>
          <Link to="/">Sponsorships</Link>
        </section>
        <section className="footer-sub2">
          <h2>Videos</h2>
          <Link to="/">Submit Video</Link>
          <Link to="/">Ambassadors</Link>
          <Link to="/">Agency</Link>
          <Link to="/">Influencer</Link>
        </section>
        <section className="footer-sub2">
          <h2>Social Media</h2>
          <Link to="/">Instagram</Link>
          <Link to="/">Facebook</Link>
          <Link to="/">Youtube</Link>
          <Link to="/">Twitter</Link>
        </section>
      </div>
      <div className="footer-social">
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="footer-logo">
              <Link to="/" className="social-logo">
                TRVL
                <i class="fab fa-typo3" />
              </Link>
            </div>
            <small class="website-rights">TRVL © 2020</small>
            <div class="social-icons">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
