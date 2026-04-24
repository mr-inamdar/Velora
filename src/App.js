import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Blog from './components/Blog';
import About from './components/About';
import ShowDetail from './components/ShowDetail'
import { useState } from 'react';
import { PROLIST } from './data/data';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  // const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [currProlist, setCurrProlist] = useState(PROLIST);
  // Cart state starts empty now!
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if the item is already in the cart using its unique ID
    const existingItem = cartItems.find((item) => item.name === product.name);

    if (existingItem) {
      // If it exists, just increase the quantity by 1
      const updatedCart = cartItems.map((item) =>
        item.name === product.name ? { ...item, qty: item.qty + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // If it's new, add it to the array with a qty of 1
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // const handleClick = ()=>{
  //   if (results.length === 0) {
  //     setCurrProlist(PROLIST);
  //   }
  //   else{
  //     setCurrProlist(results);
  //   }
  //   navigate("/shop");
  //   setResults([]);
  // }

  const showResultProducts = ()=>{
    if (results.length === 0) {
      setCurrProlist(PROLIST);
    }
    else{
      setCurrProlist(results);
    }
    setResults([]);
  }

  // Login

  // const [user, setUser] = useState(
  //   JSON.parse(localStorage.getItem("user")) || null
  // );

  // const handleLogin = (data) => {
  //   setUser(data);
  //   localStorage.setItem("user", JSON.stringify(data));
  // };

  // const handleLogout = () => {
  //   setUser(null);
  //   localStorage.removeItem("user");
  // };

  return (
    <div className="App">
      {/* <BrowserRouter basename="/Velora"> */}
      <HashRouter>
        <div className="fakeheader"></div>
        <Header onClick={()=> showResultProducts()}
                results={results} 
                setResults={setResults} 
                // handleClick={() => handleClick()}
        />

        <Routes>
          {/* <Route path="/" element={<HomePage onClick={(category)=>{
            const filteredList = PROLIST.filter(pro => pro.category.includes(category));
            
              <ShowDetail 
                name={filteredList[0].name}
                brand={filteredList[0].brand}
                img1={filteredList[0].img}
                img2={filteredList[1].img}
                img3={filteredList[2].img}
                img4={filteredList[3].img}
                price={filteredList[0].price}
              />
          }} />} />
          <Route path="/shop" element={<Shop PROLIST={currProlist} onClick={(category)=>{
            const filteredList = PROLIST.filter(pro => pro.category.includes(category));
            
              <ShowDetail 
                name={filteredList[0].name}
                brand={filteredList[0].brand}
                img1={filteredList[0].img}
                img2={filteredList[1].img}
                img3={filteredList[2].img}
                img4={filteredList[3].img}
                price={filteredList[0].price}
              />
          }} />} /> */}
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          {/* <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} /> */}
          <Route path="/shop" element={<Shop PROLIST={currProlist} addToCart={addToCart} />} />
          {/* NEW: Dynamic route for details */}
          <Route path="/product/:name/:id" element={<ShowDetail addToCart={addToCart} />} />
          <Route path='/about' element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
        
        <Footer />
      </HashRouter>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
