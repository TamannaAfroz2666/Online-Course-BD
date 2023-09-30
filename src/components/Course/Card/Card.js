import React from 'react';
import './Card.css';
import image from '../../../Assets/Image/Card/BusinessAnalysis.jpg'



const Card = () => {
    return (
        <div className='courseCard'>
            <div className="CardMain">
                <div className="card">
                    <div className="card-image">
                        <img src= {image}alt="null" />
                      


                    </div>
                </div>

            </div>

            <div className='name '>hello</div>

            
        </div>
    );
};

export default Card;