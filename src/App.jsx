import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import ProductPage from "./components/ProductPage"
import { useEffect, useState } from "react";
import CartPage from "./components/CartPage";


function App() {
  const [countitemscart, setcountitemscart] = useState();

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if(cart) {
          setcountitemscart(cart.reduce((acc, cur) => acc + cur.quantity, 0));
        }
    },[]);

  return (
    <BrowserRouter>
      <Header countitemscart={countitemscart}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:productId" element={<ProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
