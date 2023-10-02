import React from 'react';
import { BsSkipStartCircleFill } from "react-icons/bs";

const PulseBtn = () => {
    return (
        <div>
            <div className="pulseBtn">
                <button>
                    <BsSkipStartCircleFill color='red' size={50}/>
                </button>
            </div>
        </div>
    );
};

export default PulseBtn;