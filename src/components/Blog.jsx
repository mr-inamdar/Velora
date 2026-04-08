import React from 'react'

export default function Blog() {
  const BLOGS = [
  {
    img: "https://i.pinimg.com/736x/b2/ce/b5/b2ceb570a2fbcc2e326e60cee2a3cb31.jpg",
    date: "13/01"
  },
  {
    img: "https://i.pinimg.com/736x/c4/79/30/c4793093539841f4aef3b2c004bb336c.jpg",
    date: "13/02"
  },
  {
    img: "https://i.pinimg.com/736x/0f/3c/f5/0f3cf5365ec4b8eff7b55405940d2931.jpg",
    date: "13/03"
  },
  {
    img: "https://i.pinimg.com/736x/ad/c2/96/adc29613c3020e501af02a809a4af4b3.jpg",
    date: "13/04"
  }
]

  return (
    <div className='blog'>
      <div id="blog_main">
        {/* HEADER */}
        <section id="page_header" className="blog_header">
          <h2>#readmore</h2>
          <p>Read all case studies about our products!</p>
        </section>

        {/* BLOG LIST */}
        <section id="blog">
          {BLOGS.map((item, index) => (
            <div className="blog_box" key={index}>
              <div className="blog_pic">
                <img src={item.img} alt="blog" />
              </div>

              <div className="blog_details">
                <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
                <p>
                  Kickstarter man braid godard coloring book. Raclette waistcoat
                  selfies yr wolf chartreuse hexagon irony.
                </p>
                <a href="#">CONTINUE READING →</a>
              </div>

              <h1>{item.date}</h1>
            </div>
          ))}
        </section>

        {/* PAGINATION */}
        <section id="pagination">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">→</a>
        </section>
      </div>
    </div>
  )
}

