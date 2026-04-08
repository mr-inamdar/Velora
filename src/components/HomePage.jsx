import React from 'react'
import CategoryCard from './CategoryCard'
import {CATEGORIESIMG} from '../data/data'
import ProCard from './ProCard'
import { PROLIST } from '../data/data'
import { useNavigate } from 'react-router-dom'

export default function HomePage(props) {
  // Inside your HomePage or Product component:
  const navigate = useNavigate();

  const handleProductClick = (name,id) => {
    navigate(`/product/${name}/${id}`); // This changes the URL
  };

  return (
    <div className='homepage'>
      <div id="categreyc">
        <div className='prorow'>
          <h4>Categories</h4>
          <button className='btn-premium'><i class="bi bi-arrow-right"></i></button>
        </div>
        
        <div id="cproc" className='row'>
            {
                CATEGORIESIMG.map(info =>{
                    return(
                    <CategoryCard name={info.name} img={info.img} />
                  )
                })
            }
        </div>
      </div>
      <div id="Proc">
        <div className='prorow'>
            <h4>Products For You</h4>
            <button className='btn-premium'><i class="bi bi-arrow-right"></i></button>
        </div>
        <div id="procardc" className='row'>
            {
              PROLIST.map(pro =>{
                if(pro.homepage === "Y"){
                  return(<ProCard 
                    name={pro.name} 
                    price={pro.price} 
                    img={pro.img} 
                    brand={pro.brand} 
                    // onClick={props.onClick(pro.category)}
                    onClick={() => handleProductClick(pro.name, pro.category)}
                    addToCart={props.addToCart}
                    product={pro}
                    />
                  )
                }
                return null;
              })
            }
        </div>
      </div>
      {/* <div id="Proc">
        <h4>Wedding Esential</h4>
        <ProCard />
      </div>
      <div id="Proc">
        <h4>Products For You</h4>
        <ProCard />
      </div>
      <div id="Proc">
        <h4>Products For You</h4>
        <ProCard />
      </div> */}
      <div id="banner">
          <div id="v_banner">
              <video 
                src="https://v1.pinimg.com/videos/mc/720p/d0/89/73/d08973c4d14b49f59213f61ee9155ab7.mp4"
                autoPlay
                muted
                loop
                playsInline
                // controls
              />
              <div className="overlay-content">
                  <h1>SEASONAL SALE</h1>
                  <h5>Winter Collection -50% OFF</h5>
              </div>
          </div>
          <div id="sub_container">
              <div className="pic_banner">
                  <h4>crazy deals</h4>
                  <h2>buy 1 get 1 free</h2>
                  <span>The best classNameic dress is on sale at cara</span><br />
                  <button className="white">Learn More</button>
              </div>
              <div className="pic_banner b2">
                  <h4>spring/summer</h4>
                  <h2>upcomming season</h2>
                  <span>The best classNameic dress is on sale at cara</span><br />
                  <button className="white">Collection</button>
              </div>
          </div>
      </div>
      <div id="banner3">
          <div class="banner_box">
              <h2>SEASONAL SALE</h2>
              <h3>Winter Collection <span>-50% OFF</span></h3>
          </div>
          <div class="banner_box b2">
              <h2>NEW FOOTWEAR COLLECTION</h2>
              <h3>Spring/Summer 2022</h3>
          </div>
          <div class="banner_box b3">
              <h2>T-SHIRT</h2>
              <h3>New Trendy Prints</h3>
          </div>
      </div>
    </div>
  )
}
