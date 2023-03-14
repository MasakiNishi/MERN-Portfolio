import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
// import ContactPage from './pages/ContactPage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';

import products from './data/products.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="page-header">
          <Link to="/">
              <h1>Masaki<span className="lastname">Nishi</span></h1>
          </Link>
        </header>
  
        <Nav />

        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <route path="/contact" element={<ContactPage />} /> */}
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/order" element={<OrderPage products={products} />} />
            </Routes>
          </section>
  
          <nav id="top-navigation">
            <a href="#top">^</a>
          </nav>
        </main>
  
        <footer>
          <p>© 2023 Masaki Nishi</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
