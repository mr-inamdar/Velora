import React from 'react';

export default function ContactUs() {
  return (
    <div className='contactUs'>
      <section id="page_header" className="c_header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE. We love to hear from you!</p>
      </section>
            
      <section id="contact_detail" className="section-p1">
        <div className="detail">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head office</h3>
          <ul>
            <li>
              <i className="fa-solid fa-map-location-dot"></i>
              <p>Ganeshkhind Rd Near Savitribai Phule Pune University, Ganeshkhind, Pune, Maharashtra</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>+91 XXXXX XXXXX</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>Monday to Saturday: 9.00am to 16.00pm</p>
            </li>
          </ul>
        </div>

        <div className="map">
          <iframe 
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15131.018260751911!2d73.82195000000001!3d18.539829999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf77b1028739%3A0xc66c05d7b5f543e0!2sSavitribai%20Phule%20Pune%20University!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>

      <section id="form_detail">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>Drop Your Message Here</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button type="submit" className="normal">Submit</button>
        </form>
        
        <div className="people">
          <div>
            <img src="https://i.pinimg.com/736x/73/ac/09/73ac09012c3a719eb1b6572852afc780.jpg" alt="Aayaz Ahmed" />
            <p><span>Aayaz Ahmed</span> Senior Marketing Manager <br />
            Phone: +91 XXXXX XXXXX <br />E-mail: contact@example.com</p>
          </div>
          <div>
            <img src="https://i.pinimg.com/736x/1a/b5/19/1ab51985e79d23d5a5df18cca7baf789.jpg" alt="Alisa Khan" />
            <p><span>Alisa Khan</span> Senior Marketing Manager <br />
            Phone: +91 XXXXX XXXXX <br />E-mail: contact@example.com</p>
          </div>
          <div>
            <img src="https://i.pinimg.com/736x/d7/9d/4c/d79d4c1ac3e67db26cf1cf05af076e74.jpg" alt="Ishan Kachchi" />
            <p><span>Ishan Kachchi</span> Senior Marketing Manager <br />
            Phone: +91 XXXXX XXXXX <br />E-mail: contact@example.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}