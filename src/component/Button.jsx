import React from 'react';
import '../index.css';

const Button = (props) => {
    const handleClick = () => {
        console.log(props.text);
    };
    return ( 
        <button className='btn' onClick={ handleClick }>{ props.text }    
        </button>
     );
}
 
export default Button;