import './Popular.css'
import Item from '../Item/Item'
import data_product from '../Assests/data'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular In Women</h1>
      <hr />
      <div className='popular-items'>
        {data_product.map((item,i) => {
            return <Item key={i} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    

    </div>
  )
}

export default Popular
