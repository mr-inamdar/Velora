import React from 'react'

export default function About() {
  return (
    <div className='about'>
      {/* HEADER */}
      <section id="page_header" className="about_header">
        <h2>#KnowUs</h2>
        <p>Discover our story, passion, and what makes us unique.</p>
      </section>

      {/* ABOUT SECTION */}
      <section id="about_head">
        {/* Main About Us Image - Fashion Studio/Boutique Aesthetic */}
        <img src="https://i.pinimg.com/736x/f0/81/e4/f081e442247e39746ef7ff86a00fab69.jpg" alt="About us" />
        <div className="about_text">
          <h2>Who We Are?</h2>
          <p>
            We are a passionate team dedicated to delivering premium fashion
            experiences. Our goal is to combine style, comfort, and affordability
            into every product we offer.
          </p>

          <abbr title="">
            Create stunning styles with flexibility and creativity using our curated collections.
          </abbr>

          <div className="marquee">
            <p>
              ✨ Create stunning styles with full control — Explore our premium collections now!
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="feature">
        {[
        { 
          img: 'https://img.icons8.com/color/96/in-transit--v1.png', 
          text: 'Free Shipping' 
        },
        { 
          img: 'https://img.icons8.com/color/96/shopping-cart--v1.png', 
          text: 'Online Order' 
        },
        { 
          img: 'https://img.icons8.com/color/96/wallet--v1.png', 
          text: 'Save Money' 
        },
        { 
          img: 'https://img.icons8.com/color/96/commercial.png', 
          text: 'Promotions' 
        },
        { 
          img: 'https://img.icons8.com/color/96/shop.png', 
          text: 'Happy Sell' 
        },
        { 
          img: 'https://img.icons8.com/color/96/customer-support.png', 
          text: '24/7 Support' 
        }
      ].map((item, index) => (
          <div className="fe_box" key={index}>
            {/* Img src direct array se aayega */}
            <img src={item.img} alt={item.text} />
            <h6>{item.text}</h6>
          </div>
        ))}
      </section>

      
    </div>
  )
}