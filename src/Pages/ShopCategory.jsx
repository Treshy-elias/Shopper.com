import React from 'react'
import all_product from '../components/Assests/all_product'
import dropdowm_icon from '../components/Assests/dropdown_icon.png'
import Item from '../components/Item/Item'
import './CSS/ShopCategory.css'

const ShopCategory = (props) => {
  return (
    <div className='shopcategory'>
      <img className='banner' src={props.banner} alt="" />
      <h1 className='andriod-banner'>{`${props.category} Wears`}</h1>
      <div className="index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdowm_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i) => {
          if(item.category === props.category) {
            console.log(props.category)
            return <Item key={i} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
           
        })}
      </div>
    </div>
  )
}

export default ShopCategory
