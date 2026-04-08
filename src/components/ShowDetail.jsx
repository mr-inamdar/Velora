import React, { useEffect, useMemo, useState } from 'react';
import { NEWARRIVALSLIST } from '../data/data';
import ProCard from './ProCard';
import { useParams } from 'react-router-dom';
import { PROLIST } from '../data/data';

export default function ShowDetail(props) {
  const { id, name } = useParams();
  
  // Find the product in your data that matches the ID
  // const filteredList = PROLIST.filter(pro => pro.category.includes(parseInt(id)));

  const filteredList = useMemo(() => {
    return PROLIST.filter(pro =>
      pro.category.includes(parseInt(id))
    );
  }, [id]);

  const [FinalProduct, setFinalProduct] = useState([]);

  useEffect(() => {
    let temp = [];
    let i = -1;

    filteredList.forEach((pro, index) => {
      if (pro.name.includes(name)) {
        temp.push(pro);
        i = index;
      }
    });

    // agar match nahi mila
    if (i === -1) i = 0;

    for (let e = 0; e < 3; e++) {
      i++;
      if (i >= filteredList.length) {
        i = 0;
      }
      temp.push(filteredList[i]);
    }

    setFinalProduct(temp); // state use karo
  }, [name, filteredList]);
  // useEffect(()=>{
  //   var main_pic = document.getElementById("main_pic");
  //   var small_pic = document.getElementsByClassName("small_pic");
    
  //   small_pic[0].onclick = function(){
  //       main_pic.src = small_pic[0].src;
  //   }
  //   small_pic[1].onclick = function(){
  //       main_pic.src = small_pic[1].src;
  //   }
  //   small_pic[2].onclick = function(){
  //       main_pic.src = small_pic[2].src;
  //   }
  //   small_pic[3].onclick = function(){
  //       main_pic.src = small_pic[3].src;
  //   }
  // })
  const [mainImg, setMainImg] = useState("");

  useEffect(() => {
    if (FinalProduct.length > 0) {
      setMainImg(FinalProduct[0].img);
    }
  }, [FinalProduct]);

  if (filteredList.length === 0) {
    return <div>Product not found!</div>;
  }

  if (FinalProduct.length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className='sprodetail'>
      <section id="prodetail">
        <div className="single_pro_pic">
          {/*  <img src={FinalProduct[0].img} id="main_pic" alt="Product" /> {/* Gallery Thumbnails  <div className="small_pic_group"> <div className="small_pic_col"> <img src={FinalProduct[0].img} className="small_pic" alt="thumb" /> </div> <div className="small_pic_col"> <img src={FinalProduct[1].img} className="small_pic" alt="thumb" /> </div> <div className="small_pic_col"> <img src={FinalProduct[2].img} className="small_pic" alt="thumb" /> </div> <div className="small_pic_col"> <img src={FinalProduct[3].img} className="small_pic" alt="thumb" /> </div> </div> */}
          {/* Main Image */}
          <img src={mainImg} alt="Product" id="main_pic" />

          {/* Thumbnails */}
          <div className="small_pic_group">
            {FinalProduct.slice(0, 4).map((pro, index) => (
              <div className="small_pic_col" key={index}>
                <img
                  src={pro.img}
                  className="small_pic"
                  alt="thumb"
                  onClick={() => {
                    console.log("clicked:", pro.img); // debug
                    setMainImg(pro.img);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="single_pro_detail">
          <h6>{FinalProduct[0].brand}</h6>
          <h4>{FinalProduct[0].name}</h4>
          <h2>{FinalProduct[0].price}</h2>
          
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>

          <input type="number" defaultValue="1" min="1" />
          <button className="normal" onClick={() => props.addToCart(FinalProduct[0])}>Add To Cart</button>
          
          <h4>Product Details</h4>
          <span>
            The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric
            constructed from 100% cotton. This classic fit preshrunk jersey knit provides unmatched 
            comfort with each wear.
          </span>
        </div>
      </section>

      <div id="sample">
        <h2>New Arrivals</h2>
        <p>Diwali Collection - New Modern Design</p>
        <div className="pro_container">
          {NEWARRIVALSLIST.map((pro, index) => (
            <ProCard 
              name={pro.name} 
              brand={pro.brand} 
              img={pro.img} 
              key={index} 
              addToCart={props.addToCart}
              product={pro}
            />
          ))}
        </div>
      </div>
    </div>
  );
}