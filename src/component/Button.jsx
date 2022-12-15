import React from 'react';
import '../index.css';
import cart from '../cart.svg';

const Button = () => {
    return ( 
        <div>
        <button title='Add to cart'> 
            <img src={cart} alt="" />
            Add to cart
        </button>
        </div>
     );
}
 
export default Button;