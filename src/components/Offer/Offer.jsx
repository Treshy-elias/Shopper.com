import './Offer.css'
import exclusive_image from '../Assests/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
      <div className="left-hand-offer">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <div className="offer-btn">
            <p>Check Now</p>
        </div>
      </div>
      <div className="right-hand-offer">
        <img src={exclusive_image} width={`${250}px`} alt="" />
      </div>
    </div>
  )
}

export default Offer
