import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../Global/CartContext'

const Navbar = () => {
    const {qty} = useContext(CartContext)
    return (
        
            <nav>
                <ul className="left">
                    <li><Link to="/">SHOPIFY</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="/cart"><span className="Shoppingcart"><i class="fas fa-shopping-cart"></i>
    <span className="cartcount">{qty}</span>
                    </span>
                    </Link>
                    </li>
                </ul>
            </nav>
        
    )
}

export default Navbar
