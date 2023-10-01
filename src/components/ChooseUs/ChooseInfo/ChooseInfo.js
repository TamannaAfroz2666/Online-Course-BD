import React from 'react';
import './ChooseInfo.css';
import { IoBookSharp } from "react-icons/io5";

const ChooseInfo = () => {
    return (
        <div className='chooseInfo'>
            <div className="infoHead">
                <h1>Why Choose Us</h1>
                <div className="horizontal">
                    <hr color='orange' size='4' className='first'/>
                     <hr color='orange' size='4' className='second' /> 
                     <hr color='orange' size='4'  className='first'/>
                </div>
                <p>Our learning a good option for students who need to balance their work and family commitments.</p>

                <div className="optionsHead">
                    <div className="iconIs">
                        <IoBookSharp />

                    </div>
                    <div className="shortDescription">

                    </div>

            
                </div>

            </div>


        </div>
    );
};

export default ChooseInfo;