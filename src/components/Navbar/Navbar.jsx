import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [num1, setNum1] = useState(null)

  let input = document.getElementById("check")
  const menubtn = () => {
    input.checked = false
  }
  const checkbtn = () => {
    let input = document.getElementById("check")
 
    if (input.checked) {
      setNum1(0)
      console.log(num1)
    }
     else  {
    setNum1(null)
    console.log(num1 + "this is for the else")
    }

  }
  const [menu, setMenu] = useState("shop")

  
  return (
    <div className='navbar'>
      <div className="myShop-logos">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="myShop-header">
            <h2>CHECKOUT</h2>
        </div>
      </div>
      
      <input type='checkbox' id='check' onClick={() => {checkbtn()}} />
      <div>
        <label htmlFor="check" className='menu-bar'>
          <FaBars/>
        </label>
      </div>
      
      
      <div className="myShop-category">
        <ul style={{right: num1}}>
            <li onClick={() => {setMenu("shop"),  setNum1(`${-110}%`), menubtn()}}><Link style={{textDecoration: "none", color: "black" , width:`${100}%`, height: `${100}%`, display: "flex" , justifyContent: "center" ,  alignItems: "center"}} to="/" >Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("men"),  setNum1(`${-110}%`), menubtn()}}><Link style={{textDecoration: "none", color: "black" , width:`${100}%`, height: `${100}%`, display: "flex" , justifyContent: "center" ,  alignItems: "center"}} to="/men" >Men </Link> {menu==="men"?<hr/>:<></>} </li>
            <li onClick={() => {setMenu("women"),  setNum1(`${-110}%`), menubtn()}}><Link style={{textDecoration: "none", color: "black" , width:`${100}%`, height: `${100}%`, display: "flex" , justifyContent: "center" ,  alignItems: "center"}} to="/women" >Women </Link> {menu==="women"?<hr/>:<></>} </li>
            <li onClick={() => {setMenu("kids"),  setNum1(`${-110}%`), menubtn()}}><Link style={{textDecoration: "none", color: "black" , width:`${100}%`, height: `${100}%`, display: "flex" , justifyContent: "center" ,  alignItems: "center"}} to="/kids" >Kids </Link> {menu==="kids"?<hr/>:<></>} </li>
        </ul>
        
      </div>
      <div>
        <div className="nav-login-cart" style={{right: num1}}>
        <Link to="/login"  onClick={() => {setNum1(`${-110}%`), menubtn()}}><button>Login</button></Link>
        <Link to="/cart"  onClick={() => {setNum1(`${-110}%`), menubtn()}}><img src={cart_icon} alt="" /></Link>
        <div className="cart-counter">0</div>
        </div>
    
      </div>
     
    </div>
  )
}

export default Navbar
