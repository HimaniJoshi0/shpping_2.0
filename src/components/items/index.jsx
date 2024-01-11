import React  from 'react'
import "../items/style.css"


const Items = ({item, addCartdata=()=>{ }, button}) => {
   return(
    <>
     <div className="item" key={item.id}>

        <div className='image-title'>
        <div className='image'>
        <img src={item.image} alt="Product" className='img'/>
        </div>
          <div className='title_div'>
           <h3 className='title'>{item.title}</h3>
          </div>
        </div>
      
        <div className='price_rating'>
      
          <p>
            <b>$</b> {item.price}
          </p>
          <p>
            <b><i class="fa-solid fa-star icon_clr"></i></b> {item.rating.rate}
          </p>
        </div>

        <div className="btn">
        <button onClick={addCartdata.bind(this,item)}><i class="fa-solid fa-cart-shopping"></i>  {button}</button>
      </div>
    </div>
    </>
   )

}

export default Items