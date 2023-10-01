import React from 'react';
import './ChooseInfo.css';
import { PiBookOpenLight } from "react-icons/pi";
import { PiGraduationCapLight } from "react-icons/pi";


const ChooseInfo = () => {
    return (
        <div className='chooseInfo'>
            <div className="infoHead">
                <h1>Why Choose Us</h1>
                <div className="horizontal">
                    <hr color='orange' size='4' className='first' />
                    <hr color='orange' size='4' className='second' />
                    <hr color='orange' size='4' className='first' />
                </div>
                <p>Our learning a good option for students who need to balance their work and family commitments.</p>
                <div className="optionChoose">
                <div className="optionsHead">
                    <div className="iconIs">
                        <PiBookOpenLight className='bookIcon' />
                    </div>
                    <div className="shortDescription">
                        <h5>Best Education System</h5>
                        <span>Advanced Education Management</span>
                    </div>
                </div>

                </div>
                {/* learning part  */}
                <div className="optionsHeadLearning">
                    <div className="iconIs">
                     
                        <PiGraduationCapLight  className='graduationIcon'/>

                    </div>
                    <div className="shortDescription">
                        <h5>Learning Management</h5>
                        <span>LMS Integration</span>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ChooseInfo;