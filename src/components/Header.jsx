import {useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Logo from '../data/newLogo.png';
import { categorylist, PROLIST } from '../data/data';
import SearchOption from './SearchOption';

export default function Header(props) {
  const [query, setQuery] = useState("");
  // Menu open/close track karne ke liye state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    let links = document.getElementById('links');
    if (!isMenuOpen) {
      links.style.right = '0px';
    } else{
      links.style.right = '-300px'
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      // 1. Find the categories that match the search string
      const matchedCategories = Object.keys(categorylist).filter(key =>
        key.toLowerCase().includes(value.toLowerCase())
      );

      // 2. Get all valid IDs from those matched categories
      // .flat() turns [[109], [105]] into [109, 105]
      const searchIds = matchedCategories.map(cat => categorylist[cat]).flat();

      // 3. Filter your actual Product Data using these IDs
      const filteredProducts = PROLIST.filter(product => 
        product.category.some(catId => searchIds.includes(catId))
      );

      props.setResults(filteredProducts);
    } else {
      props.setResults([]);
    }
  };

  // const navigate = useNavigate();

  // const handleUserClick = () => {
  //   if (!props.user) {
  //     navigate("/login");
  //   } else {
  //     navigate("/profile");
  //   }
  // };


  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);

  const handleLogin = () => {
    if (!name || !address) return;

    const data = { name, address, image };

    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));

    // reset
    setName("");
    setAddress("");
    setImage(null);
    setShow(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 image
      };
      reader.readAsDataURL(file);
    }
  };
  let timeout;
  const [animate, setAnimate] = useState(false);
  const handleEnter = () => {
    clearTimeout(timeout);
    setShow(true);
    setTimeout(() => setAnimate(true), 10);
  };

  const handleLeave = () => {
    timeout = setTimeout(() => {
      setAnimate(false);
      setTimeout(() => setShow(false), 200);
    }, 150); // delay before closing
  };
  return (
    <div className='header'>
      <img src={Logo} alt="" id="logo" />
      <div id="homei"><i class="bi bi-house-door-fill"></i></div>
      <div id="serchbar">
        <input type="text" name="" id="serch" placeholder='Enter Text...' onChange={handleChange} value={query} />
        <i class="bi bi-search"></i>
        {/* <div id="result_container">

        </div> */}
        {/* Displaying the results */}
        {props.results.length > 0 && (
          <div id="result_container" className="search-dropdown">
            {props.results.map((item, index) => (
              <SearchOption 
                key={index} // Always add a key in map!
                name={item.name} 
                brand={item.brand} 
                img={item.img} 
                onClick={props.onClick}
              />
            ))}
          </div>
        )}
      </div>
      <div id="links">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""} id="homepage">Home</NavLink>
        <NavLink to="/shop" className={({isActive}) => isActive ? "active" : ""} href="" id="shoppage" onClick={props.onClick}>Shop</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""} href="" id="aboutpage">About</NavLink>
        <NavLink to="/blog" className={({isActive}) => isActive ? "active" : ""} href="" id="blogpage">Blog</NavLink>
        <NavLink to="/contactUs" className={({isActive}) => isActive ? "active" : ""} href="" id="contactUspage">Contact Us</NavLink>
        {/* <div id="useri"
          className="user-container"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <i class="bi bi-person-circle" onClick={handleUserClick}></i>

          {/* {show && (
            <div className="user-card">
              <img src="https://i.pinimg.com/736x/8a/93/f7/8a93f77503de0e93db17a236e9cce46c.jpg" alt='img' />
              <h4>Zeeshan</h4>
              <p>Pune, India</p>
            </div>
          )} 
        </div> */}

        <div
          id="useri"
          className="user-container"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {/* ICON */}
          <i class="bi bi-person-circle"></i>

          {/* DROPDOWN */}
          {show && (
            <div className={`user-dropdown ${animate ? "open" : ""}`}>
              
              {!user ? (
                <div className="login-box">
                  <h3>Login</h3>

                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  <input type="file" onChange={handleImage} />

                  {image && <img src={image} className="preview-img" />}

                  <button onClick={handleLogin}>Login</button>
                </div>
              ) : (
                <div className="profile-box">
                  {/* profile code */}
                  <div className="profile-top">
                  {/* CONDITION */}
                  {user.image ? (
                    <img 
                      src={user.image} 
                      alt="profile" 
                      className="avatar-img"
                    />
                  ) : (
                    <div className="avatar">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h4>{user.name}</h4>
                    <p>{user.address}</p>
                  </div>
                </div>

                <button onClick={handleLogout}>Logout</button>

                </div>
              )}

            </div>
          )}
        </div>
        <NavLink to="/cart" className={({isActive}) => isActive ? "active" : ""} href="" id="carti"><i class="bi bi-cart4"></i></NavLink>
      </div>
      {/* Hamburger / Close Icon */}
        <i 
          id="menu-icon" 
          // Agar menu open hai toh 'X' icon dikhega, warna 'List' icon
          className={`bi ${isMenuOpen ? "bi-x-lg" : "bi-list"}`} 
          onClick={toggleMenu}
        ></i>
    </div>
  )
}
