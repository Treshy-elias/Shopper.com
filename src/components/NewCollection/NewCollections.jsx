import './NewCollections.css'
import new_collections from '../Assests/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='newCollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="newCollections-products">
        {new_collections.map((item,i) => {
        return <Item key={i} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
