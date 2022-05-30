import React,{useState,useEffect} from "react";
import AddProduct from "./components/AddProduct";
import {Products} from './components/Products'
const App = () => {
  let [data,setData]=useState([])
  async function getData(){
     let res = await fetch("http://localhost:8080/products")
     .then((d)=>d.json())
     setData(res)
  }
 
  
  useEffect(() => {
    getData()
  },[])
  function updatePage (val){
    
  }
  console.log(data)
  return <div>
    <AddProduct>Add Product</AddProduct>
    <Products data={data} getData={getData}/>
  </div>;
};

export default App;
