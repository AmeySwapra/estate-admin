import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage'
import NotificationPage from './Pages/NotificationPage'
import RegisterUserPage from './Pages/RegisterUserPage'
import TestimonialPage from './Pages/TestimonialPage';
import ProductPage from './Pages/productPage';
import DiscountPage from './Pages/DiscountPage';
import OrderManagementPage from './Pages/OrderManagementPage';
import GalleryPage from './Pages/GalleryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='notification' element={<NotificationPage/>} />
        <Route path='testimonial' element={<TestimonialPage/>} />
        <Route path='/register-user' element={<RegisterUserPage/>}/>
        <Route path='/discount' element={<DiscountPage/>}/>
        <Route path='/order-management' element={<OrderManagementPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
