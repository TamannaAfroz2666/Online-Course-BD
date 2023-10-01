import React from 'react';
import './ParentCard.css';
import Card from '../Card/Card';
import DigitalMarketing from '../Card/DigitalMarketing/DigitalMarketing';
import WebDevelopment from '../Card/WebDevelopment/WebDevelopment';

const ParentCard = () => {
    return (
        <div className='parentCard'>
            <div className="header">
                <div className="business">
                    <Card></Card>
                </div>
                <div className="digitalMarketing">
                    <DigitalMarketing></DigitalMarketing>
                </div>
                <div className="webDevelopment">
                    <WebDevelopment></WebDevelopment>
                </div>
            </div>
            
        </div>
    );
};

export default ParentCard;