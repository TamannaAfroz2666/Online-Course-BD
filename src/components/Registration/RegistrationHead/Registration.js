import React from 'react';
import './Registration.css';
import image from '../../../Assets/Image/Registration/FemaleName.jpg'

const Registration = () => {
    return (
        <div className="registrationMain">
            <div className='registration'>
                <div className="registrationHead">
                    <div className="registrationPage">
                        <div className="registrationHeader">
                            <h1>Register Now</h1>
                            <p>Create your account and browse thousand of courses !!</p>

                        </div>


                    </div>
                    <div className="registrationImage">
                        <img src={image} alt="not found" />

                    </div>
                </div>


            </div>

        </div>

    );
};

export default Registration;