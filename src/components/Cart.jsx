// import React, { useState } from 'react';

// export default function Cart() {
//   // 1. Move the items into state and add a 'qty: 1' to each object
//   const [cartItems, setCartItems] = useState([
//     {
//       img: "https://i.pinimg.com/736x/ed/33/f9/ed33f9468d2c459cdb4681af66fde982.jpg",
//       name: "Boys' Casual Shirt and Trouser Set",
//       price: "850",
//       qty: 1
//     },
//     {
//       img: "https://i.pinimg.com/736x/0e/92/24/0e922472aff6b8c0488ccff51bc9b1dc.jpg",
//       name: "Boys' 3-Piece Party Wear (Pant, Shirt, and Waistcoat)",
//       price: "1,800",
//       qty: 1
//     },
//     {
//       img: "https://i.pinimg.com/736x/1b/9b/0c/1b9b0c3142effc5d67726119f241d72d.jpg",
//       name: "Boys' Denim Jacket with T-Shirt and Jeans Set",
//       price: "1,500",
//       qty: 1
//     }
//   ]);

//   // Helper function to safely turn string prices like "1,800" into math-ready numbers like 1800
//   const parsePrice = (priceStr) => {
//     return parseInt(priceStr.toString().replace(/\D/g, ''), 10);
//   };

//   // 2. Function to update quantity for a specific row index
//   const handleQuantityChange = (index, newQty) => {
//     if (newQty < 1) return; // Prevents the user from going below 1
//     const updatedItems = [...cartItems];
//     updatedItems[index].qty = newQty;
//     setCartItems(updatedItems);
//   };

//   // 3. Function to dynamically calculate the total cart price
//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       return total + (parsePrice(item.price) * item.qty);
//     }, 0);
//   };

//   return (
//     <div className='cart'>
      
//       <section id="page_header" className="cart_header">
//         <h2>#let's_talk</h2>
//         <p>LEAVE A MESSAGE. We love to hear from you!</p>
//       </section>

//       <section id="cart" className="section-p1">
//         <table>
//           <thead>
//             <tr>
//               <td>Remove</td>
//               <td>Image</td>
//               <td>Product</td>
//               <td>Price</td>
//               <td>Quantity</td>
//               <td>Subtotal</td>
//             </tr>
//           </thead>

//           <tbody>
//             {cartItems.map((item, index) => (
//               <tr key={index}>
//                 <td>
//                   <button className="remove-btn">✖</button>
//                 </td>
//                 <td>
//                   <img src={item.img} alt="product" width="80" />
//                 </td>
//                 <td id='cartName'>{item.name}</td>
//                 <td>₹{item.price}</td>
//                 <td>
//                   <input
//                     type="number"
//                     value={item.qty}
//                     min="1"
//                     onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
//                   />
//                 </td>
//                 {/* Safe price calculation for the row */}
//                 <td>₹{parsePrice(item.price) * item.qty}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       <section id="cart_add" className="section-p1">
//         <div id="coupon">
//           <h3>Apply Coupon</h3>
//           <div className="coupon-box">
//             <input type="text" placeholder="Enter Your Coupon" />
//             <button className="normal">Apply</button>
//           </div>
//         </div>

//         <div id="subtotal">
//           <h3>Cart Total</h3>
//           <table>
//             <tbody>
//               <tr>
//                 <td>Cart Subtotal</td>
//                 {/* Dynamically display the total */}
//                 <td>₹{calculateTotal()}</td>
//               </tr>
//               <tr>
//                 <td>Shipping</td>
//                 <td>Free</td>
//               </tr>
//               <tr>
//                 <td><strong>Total</strong></td>
//                 <td><strong>₹{calculateTotal()}</strong></td>
//               </tr>
//             </tbody>
//           </table>
//           <button className="normal">Proceed to checkout</button>
//         </div>
//       </section>
      
//     </div>
//   );
// }

import React from 'react';

// 1. Accept cartItems and setCartItems as props from App.jsx
export default function Cart({ cartItems, setCartItems }) {

  // Helper function to safely turn string prices like "1,800" into math-ready numbers like 1800
  const parsePrice = (priceStr) => {
    return parseInt(priceStr.toString().replace(/\D/g, ''), 10);
  };

  // 2. Function to update quantity for a specific row index
  const handleQuantityChange = (index, newQty) => {
    if (newQty < 1) return; // Prevents the user from going below 1
    const updatedItems = [...cartItems];
    updatedItems[index].qty = newQty;
    setCartItems(updatedItems);
  };

  // 3. New function to handle removing an item from the cart
  const handleRemoveItem = (indexToRemove) => {
    // Filter out the item that matches the index we want to remove
    const updatedItems = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedItems);
  };

  // 4. Function to dynamically calculate the total cart price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (parsePrice(item.price) * item.qty);
    }, 0);
  };

  return (
    <div className='cart'>
      
      <section id="page_header" className="cart_header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE. We love to hear from you!</p>
      </section>

      <section id="cart" className="section-p1">
        {/* Check if cart is empty so we don't show an empty table */}
        {cartItems.length === 0 ? (
          <h3 style={{ textAlign: "center", padding: "20px" }}>Your cart is empty!</h3>
        ) : (
          <table>
            <thead>
              <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    {/* Hooked up the remove function here */}
                    <button className="remove-btn" onClick={() => handleRemoveItem(index)}>✖</button>
                  </td>
                  <td>
                    <img src={item.img} alt="product" width="80" />
                  </td>
                  <td id='cartName'>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.qty}
                      min="1"
                      onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                    />
                  </td>
                  {/* Safe price calculation for the row */}
                  <td>₹{parsePrice(item.price) * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section id="cart_add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div className="coupon-box">
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>

        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                {/* Dynamically display the total */}
                <td>₹{calculateTotal()}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>₹{calculateTotal()}</strong></td>
              </tr>
            </tbody>
          </table>
          <button className="normal">Proceed to checkout</button>
        </div>
      </section>
      
    </div>
  );
}