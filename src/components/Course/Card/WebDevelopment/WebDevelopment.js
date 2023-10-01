import React from 'react';
import './WebDevelopment.css';
import webImage from '../../../../Assets/Image/Card/BusinessAnalysis.jpg'
import { AiFillStar } from "react-icons/ai";
import { BiSolidUser, BiSolidMessageRounded } from "react-icons/bi";
import traineeImage from '../../../../Assets/Image/TrainePictures/Ta Ani.jpg';

const WebDevelopment = () => {
    return (
        <div>
            <div className='courseCard'>
            <div className="CardMain">
                <div className="card">
                    <div className="BusinessDevelopment">
                        <div className="card-image">
                            <img src={webImage} alt="null" />
                        </div>
                        {/*---  traine info ---- */}
                        <div className="trineNameAll">
                            <div className="taineName">
                                <a href="#">
                                    <h5 > Jhon doe</h5>
                                </a>
                            </div>
                            <div className="taineImage">
                                <img src={traineeImage} alt="null" />
                            </div>

                        </div>
                        <div className="card-title">
                            <a href="/businessDevelopment">
                                <h4 className='title'> Business Development</h4>
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
                                    <p> <BiSolidUser className='quantityIcon'/> <span>230</span></p>
                                </div>
                                <div className="textQuantity">
                                    <p><BiSolidMessageRounded className='textIcon' /> <span>5050
                                    </span> </p>

                                </div>
                            </div>
                        </div>
                        {/*------ short title----  */}
                        <div className="shortTitleDes">
                            <p> used to identify, nurture and acquire new clients. </p>
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

            <div className='name '>hello</div>


        </div>
            
        </div>
    );
};

export default WebDevelopment;