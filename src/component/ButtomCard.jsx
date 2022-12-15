import React from 'react';


const ButtomCard = (props) => {
    const { imageData } = props;
    return (
        <div className="bottom">
            <div className="img1">
                <img src={imageData.src} alt="" />
            </div>
        </div>
    );
}



export default ButtomCard;