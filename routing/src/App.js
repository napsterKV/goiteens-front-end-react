import logo from './logo.svg';
import { data } from "./CardList/CardList";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import './App.css';
import CardList from './CardList/CardList';
import { createContext } from 'react';
// import CardList from './CardList/Card';

const Store = ()=>{
  return <div>
    <CardList></CardList>
  </div>
} 
const Home = ()=>{
  return <div>
    <Navigate to="/store" replace />;
  </div>
} 
const Etwas = ()=>{
  return <div>
    404
  </div>
} 
const Product = () => {
  const { id } = useParams();
  const productData = data.find((item) => {
    return item.key === id;
  });
  if (!productData) {
    return <div>Product is not found...</div>
  }
  return <div>
    Product {productData.model}
  </div>
} 

export const myContext = createContext();

function App() {
  return (
    <div className="App"> 
      <myContext.Provider value={'contextValue'}>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<Etwas />} />
        <Route path="/product/:id" element={<Product />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
      </myContext.Provider>
    </div>
  );
}

export default App;

// import Home from "path/to/pages/Home";
// import About from "path/to/pages/About";

 