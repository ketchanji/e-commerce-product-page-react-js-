import React from 'react';
import product1small from '../product1small.jpg';
import product2small from '../product2small.jpg';
import product3small from '../product3small.jpg';
import product4small from '../product4small.jpg';




const ButtomCard = (props) => {
    return ( 
        <div className="bottom">
                <div className="img1">
                <img src={product1small} alt="" />
                </div>
        </div>
     );
}


/* <div className="bottom">
            <div className="img1">
            {products.map(p => {
            return <img src={p.src} alt="" />;
            })}
            </div>
        </div> */
 
export default ButtomCard;