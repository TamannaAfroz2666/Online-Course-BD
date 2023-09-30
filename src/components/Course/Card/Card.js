import React from 'react';
import './Card.css';
import businessDevelopment from '../../../Assets/Image/Card/BusinessAnalysis.jpg';
import jhonDoe from '../../../Assets/Image/TrainePictures/Jhon Doe.jpg';




const Card = () => {
    return (
        <div className='courseCard'>
            <div className="CardMain">
                <div className="card">
                    <div className="BusinessDevelopment">
                        <div className="card-image">
                            <img src={businessDevelopment} alt="null" />
                        </div>
                        <div className="trineNameAll">
                            <div className="taineName">
                                <a href="#">
                                    <h5>Jhon Doe</h5>
                                </a>
                            </div>
                            <div className="taineImage">
                                <img src={jhonDoe} alt="null" />
                            </div>

                        </div>
                        <div className="card-title">
                            <h3>Business Development</h3>
                        </div>

                    </div>

                </div>

            </div>

            <div className='name '>hello</div>


        </div>
    );
};

export default Card;