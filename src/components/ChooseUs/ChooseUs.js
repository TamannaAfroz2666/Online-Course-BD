import React from 'react';
import './ChooseUs.css';
import ChooseInfo from './ChooseInfo/ChooseInfo';
import ChooseVideo from './ChooseVideo/ChooseVideo';

const ChooseUs = () => {
    return (
        <div className='chooseUs'>
            <div className="chooseHead">
                <div className="chooseInfo">
                    <ChooseInfo></ChooseInfo>
                </div>
                <div className="chooseVideo">
                    <ChooseVideo></ChooseVideo>
                </div>
            </div>



        </div>
    );
};

export default ChooseUs;
