import React  from 'react'
import "../items/index.css"


const Items = ({item, addCartdata=()=>{ }, button}) => {
   return(
    <>
     <div className="item" key={item.id}>
      <div>

        <div className='img_title'>
        <div className='image'>
        <img src={item.image} alt="Product" className='img'/>
        </div>
        <h3>{item.title}</h3>
        </div>
      
        <div >
          <p >
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
        <button onClick={() => addCartdata(item)}>{button}</button>
      </div>

      </div>
    </div>
    
    </>
   )

}

export default Items