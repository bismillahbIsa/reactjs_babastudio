import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Carts from './components/Carts';
import Default from './components/Default';

function App() {
  return (
    <React.Fragment>
        <Main/>
    </React.Fragment>
  );
}

const Main = () => {
  return (
    <main className="main">
     <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </main>
  );
}

export default App;
