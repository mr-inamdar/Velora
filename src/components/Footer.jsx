import React from 'react'
import Logo from '../data/newLogo.png';

export default function Footer() {
  return (
    <footer className='footer'>
      
      {/* NEWSLETTER */}
      <section id="newsletter">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button>Sign Up</button>
        </div>
      </section>

      {/* Back to Top */}
      <div id="btot" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
        ↑ Back to Top
      </div>

      {/* Main Footer */}
      <div id="about">
        <h5 className='tagline'>
          🛒 Cartzone — Your one-stop shop for fashion, food & lifestyle essentials.
        </h5>

        {/* Links */}
        <div id="lists">

          <ul>
            <h4>Quick Links</h4>
            <li>Shop</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <ul>
            <h4>Customer Support</h4>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Shipping Info</li>
            <li>FAQs</li>
          </ul>

          <ul>
            <h4>Categories</h4>
            <li>Fashion</li>
            <li>Electronics</li>
            <li>Groceries</li>
            <li>Accessories</li>
          </ul>

          <ul>
            <h4>Follow Us</h4>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>

        </div>

        {/* Logo */}
        <div id="logo">
          <img src={Logo} alt="Cartzone Logo" id="logoimg" />
          {/* <h4>Velora</h4> */}
        </div>

        {/* Copyright */}
        <div id="copyright">
          © 2026 Cartzone India. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}