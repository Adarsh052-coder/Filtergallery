import React,{useState} from 'react'
import Data from "./GalleryData";
import Gallery from './Gallery';
const Button = () => {
    const [items,setItems]=useState(Data);

    const filterItem=(categItem)=>{
     const updatedItem=Data.filter((curElem)=>{
        return curElem.category===categItem;
     });
     setItems(updatedItem);
  }

    // const [items,setItems]=useState(Data);
  // const filterItem=(categItem)=>{
  //    const updatedItem=Data.filter((curElem)=>{
  //       return curElem.category===categItem;
  //    });
  //    setItems(updatedItem);
  // }
  return (
    <div>
        <div className="container">
     <button className="custom-btn btn" onClick={()=>filterItem('breakfast')}><span>Breakfast</span></button>
     <button className="custom-btn btn" onClick={()=>filterItem('lunch')}><span>Lunch</span></button>
     <button className="custom-btn btn" onClick={()=>filterItem('evening')}><span>Evening</span></button>
     <button className="custom-btn btn" onClick={()=>filterItem('dinner')}><span>Dinner</span></button>
     <button className="custom-btn btn" onClick={()=>filterItem('all')}><span>All</span></button>
    </div>
    <Gallery items={items}/>
    </div>
  )
}

export default Button
