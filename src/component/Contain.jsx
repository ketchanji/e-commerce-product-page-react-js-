import React from 'react';
import Button from './Button';
import product1 from '../product1.jpg';
import plus from '../plus.svg';
import minus from '../minus.svg';
import ButtomCard from './ButtomCard';

const Contain = (props) => {
    return ( 
        <div className="container">
            <div className="container1">
                <div className="upper">
                    <img src={product1} alt="" />
                </div>
                <ButtomCard />
            </div>
            <div className="container2">
                <div className="carry">
                <p>Sneaker Company</p>
                <h1>Fall Limited Edition Sneakers</h1>
                <span>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</span>
                    <div className="price">
                    <p>$125.00</p>
                    <span>50%</span>
                    </div>
                    <div className="underprice">
                    <p><strike>$250.00</strike> </p>
                    </div>
                    <div className="buttons">
                        <div className="math">
                            <img src={plus} alt="" />
                            <span>0</span>
                            <img src={minus} alt="" />
                        </div>
                        <Button />
                    </div>
            </div>
        </div>
        </div>
     );
}
 
export default Contain;