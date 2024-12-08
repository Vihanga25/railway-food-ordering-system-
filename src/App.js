import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FoodMenu from './components/FoodMenu';
import Order from './components/Order';
import MyOrders from './pages/MyOrders';
import About from './pages/About';
import UserAccount from './pages/UserAccount';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddtoCart from './pages/AddtoCart';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<FoodMenu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/about" element={<About />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="/add-to-cart" element={<AddtoCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
