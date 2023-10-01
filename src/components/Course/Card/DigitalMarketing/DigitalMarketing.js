import React from 'react';
import './DigitalMarketing.css';
import DigitalMarketingImage from '../../../../Assets/Image/Card/BusinessStragy.jpg';
import jhonRock from '../../../../Assets/Image/TrainePictures/Jhon Rock.jpg';
import { AiFillStar } from "react-icons/ai";
import { BiSolidUser, BiSolidMessageRounded } from "react-icons/bi";

const DigitalMarketing = () => {
    return (
        <div>
            <div className='courseCard'>
            <div className="CardMain">
                <div className="card">
                    <div className="digitalMarketing">
                        <div className="card-image">
                            <img src={DigitalMarketingImage} alt="null" />
                        </div>
                        {/*---  traine info ---- */}
                        <div className="trineNameAll">
                            <div className="taineNameD">
                                <a href="#">
                                    <h5 > Jhon Rock</h5>
                                </a>
                            </div>
                            <div className="taineImage">
                                <img src={jhonRock} alt="null" />
                            </div>

                        </div>
                        <div className="card-title">
                            <a href="/businessDevelopment">
                                <h4 className='title'> Digital Marketing Strategy</h4>
                            </a>
                        </div>
                        <div className="ratingsPublic">
                            <div className="iconList">
                                <ul>
                                    <li>   <AiFillStar /></li>
                                    <li>   <AiFillStar /></li>
                                    <li>   <AiFillStar /></li>
                                    <li>   <AiFillStar /></li>
                                    <li >   <AiFillStar className='lastOne' /></li>
                                </ul>
                            </div>
                            <div className="ratingList">
                                <div className="userQuantity">
                                    <p> <BiSolidUser className='quantityIcon'/> <span>2300</span></p>
                                </div>
                                <div className="textQuantity">
                                    <p><BiSolidMessageRounded className='textIcon' /> <span>550
                                    </span> </p>

                                </div>
                            </div>
                        </div>
                        {/*------ short title----  */}
                        <div className="shortTitleDes">
                            <p> Connect with potential customers using the internet of communication </p>
                        </div>
                        {/* --------button group ----- */}
                        <div className="buttonGroup">
                            <div className="enrollBtn">
                                <button type='button'>
                                    <a href="/enroll page"> Enroll Now</a>
                                </button>
                            </div>
                            <div className="freeBtn">
                                <button>
                                    <a href="/free">Free</a>

                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
            
        </div>
    );
};

export default DigitalMarketing;