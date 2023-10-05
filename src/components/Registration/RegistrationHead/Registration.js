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
                            <p>Create your account and browse <br />
                            thousand of courses !!</p>
                        </div>
                        <div className="inputFields">
                            <input type="text" value='' name='name' placeholder='Your Name' autoComplete='off' />
                        </div>
                        <div className="inputFields">
                            <input type="email" value='' name='email' placeholder='Email Address' autoComplete='off' />
                        </div>
                        <div className="inputFields">
                            <input type="text" value='' name='phone' placeholder='Your Phone' autoComplete='off' />
                        </div>
                        <div className="inputFields">
                            <input type="password" value='' name='password' placeholder='Choose Password' autoComplete='off' />
                        </div>
                        <div className="inputFields">
                            <button type='button' >Sing Up Now!</button>
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