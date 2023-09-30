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
                        <div className="trineName">
                            <div className="taineImage">
                                <img src={jhonDoe} alt="null" />
                            </div>
                            <div className="taineName">
                                <a href="#">
                                    <h6>Jhon Doe</h6>
                                </a>

                            </div>



                        </div>

                    </div>

                </div>

            </div>

            <div className='name '>hello</div>


        </div>
    );
};

export default Card;