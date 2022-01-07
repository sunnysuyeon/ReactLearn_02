import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";
function App() {
  const [product, setProduct] = useState([]);
  const [loding, setIsLoading] = useState(true);

  const getProduct =  async() => {
    const res = await fetch("https://fakestoreapi.com/products");
    const resJson = await res.json();
    setProduct(resJson);
    setIsLoading(false);
  };
  useEffect(() => {
    getProduct();
  }, []);
  
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home product={product}/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
