import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import './App.css';

import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import PurchasedHistory from "./PurchasedHistory";
import AboutUs from "./AboutUS";
import ContactUs from "./ContactUS";
import Home from "./Home";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";





function App() {
  const cart = useSelector((state) => state.Cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
    <GoogleOAuthProvider clientId="552019023310-g811aaqq1ke5nc8pmubpn84kag56sove.apps.googleusercontent.com"><GoogleLoginComponent /></GoogleOAuthProvider>
      <nav>
        <Link to='/home'><i className="fas fa-home"></i> Home</Link>
        <Link to='/veg'><i className="fas fa-carrot"></i> Veg</Link>
        <Link to='/non-veg'><i className="fas fa-drumstick-bite"></i> Non-Veg</Link>
        <Link to='/cart'><i className="fas fa-shopping-cart"></i> Cart({totalItems})</Link>
        <Link to='/purchasedHistory'><i className="fas fa-history"></i> Purchased History</Link>
        <Link to='/AboutUs'><i className="fas fa-info-circle"></i> About Us</Link>
        <Link to='/ContactUs'><i className="fas fa-envelope"></i> Contact Us</Link>
    
  
</nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path='veg' element={<Veg />} />
        <Route path='non-veg' element={<NonVeg />} />
        <Route path='cart' element={<Cart />} />
        <Route path='purchasedHistory' element={<PurchasedHistory />} />
        <Route path='AboutUs' element={<AboutUs />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
