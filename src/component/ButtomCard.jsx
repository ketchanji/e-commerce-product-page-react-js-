import React from 'react';
import product1small from '../product1small.jpg';
import product2small from '../product2small.jpg';
import product3small from '../product3small.jpg';
import product4small from '../product4small.jpg';

const ButtomCard = () => {
    return ( 
        <div className="bottom">
                    <div className="img1">
                    <img src={product1small} alt="" />
                    </div>
                    <div className="img2">
                    <img src={product2small} alt="" />
                    </div>
                    <div className="img3">
                    <img src={product3small} alt="" />
                    </div>
                    <div className="img4">
                    <img src={product4small} alt="" />
                    </div>
                </div>
     );
}
 
export default ButtomCard;