import React from 'react';
import cart from '../cart.svg';


const Cart = (props) => {
    return ( 
        <div class="cart">
                <img className='img-cart' src={cart} alt="" />
         </div>
     );
}
 
export default Cart;