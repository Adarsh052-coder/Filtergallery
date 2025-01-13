import React from 'react'
// import Data from "./GalleryData";
// import Button from "./Button";
const Gallery = (props) => {
  return (
      <>

      {/* <Button  onClick={()=>filterItem('breakfast')} />  */}
        <div className="main">
        {
          props.items.map((elem)=>{
            const {image, name, description, price}=elem;
              return(
                <>
                <div className="main-card">
        <img src={image} alt="Food" />
        <div className="descrp">
            <div className="title">{name}</div>
            <p>{description}</p>
        <div className="price-btn">
            <p className="price">Price: {price}</p>
            <button type="button" className="order-btn">Order Now</button>
        </div>
        <div className="p-s">Prices may vary on selected date !</div>
        </div>
          </div>
                </>
              )
            })
          }
          </div>
    </>
  )
}

export default Gallery
