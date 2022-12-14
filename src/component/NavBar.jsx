import React from 'react';
import Cart from './Cart';
import avatar from '../avatar.png';
const NavBar = props => {
    return (
        <div className="section">
        <div className="menu">
            <div className="navbar">
                <div className="logo">
                <p>Sneakers</p>
                </div>
                <ul>
                    <li> <a href="#">Collections</a> </li>
                    <li> <a href="#">Men</a> </li>
                    <li> <a href="#">Women</a> </li>
                    <li> <a href="#">About</a> </li>
                    <li> <a href="#">Contact</a> </li>
                </ul>
            </div>
            <div class="profile_cart">
                <Cart />
                <div class="profile">
                <img className='img-avatar' src={avatar} alt="" />
                </div>
            </div>
        </div><hr />
        </div>
    );
};
 
export default NavBar;