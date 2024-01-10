import React  from 'react'
import "../items/index.css"


const Items = ({item, addCartdata=()=>{ }, button}) => {
   return(
    <>
     <div className="item" key={item.id}>

        <div className='image-title'>
        <div className='image'>
        <img src={item.image} alt="Product" className='img'/>
        </div>
        <div>
          <h3>{item.title}</h3>
          </div>
        
        </div>
      
        <div>
          <p className="description">
            <b>Description:</b> {item.description}
          </p>
          <p>
            <b>Price:</b> {item.price}
          </p>
          <p>
            <b>Rating:</b> {item.rating.rate}
          </p>
        </div>

        <div className="btn">
        <button onClick={addCartdata.bind(this,item)}>{button}</button>
      </div>
    </div>
    </>
   )

}

export default Items