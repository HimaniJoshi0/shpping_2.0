import React, {useEffect, useState} from 'react'
import Items from '../../components/items';
import "./style.css"


const Home = () => {
  const[apidata, setApiData] = useState([])
  const[cartdata, setCartdata] = useState([])
  

async function fetchData(){
    try{
         const response = await fetch("https://fakestoreapi.com/products");
         const data= await response.json();
         console.log(data)
         setApiData(data)

    }
    catch{
        console.log("error in fetching data")
    }
}

const addCartdata = (item) => {
  console.log(item)
  const localCartdata = localStorage.getItem("setlocalCartdata");
  const storedData = localCartdata ? JSON.parse(localCartdata) : [];
  console.log(storedData)

  if (!Array.isArray(storedData)) {
    console.error("Data in local storage is not an array.");
    return;
  }

  const isItemInCart = storedData.some((cartItem) => cartItem.id === item.id);

  if (!isItemInCart) {
    const updatedData = [...storedData, item];
    localStorage.setItem("setlocalCartdata", JSON.stringify(updatedData));
    setCartdata(updatedData);
  } else {
    console.log("Item already exists in the cart");
  }
};

const showitems=(item)=>{
   return(
    <Items item={item} button="ADD TO CART" addCartdata={addCartdata}/> 
   )    
}

useEffect(()=>{
  fetchData();
  const localCartdata =localStorage.getItem("setlocalCartdata");
  const storedData = localCartdata ? JSON.parse(localCartdata) : [];
    console.log("Stored data in localstorage")
    setCartdata(storedData);
},[])

return (
<div className='container'>
 {apidata && apidata.map(showitems)}
</div>
)
}

export default Home