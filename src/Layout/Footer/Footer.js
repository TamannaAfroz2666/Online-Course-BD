import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerHead">
                <h1>Get Started and <br />Grow Your Career</h1>
                <div className="groupAll">
                    <div className="documentation">
                        <a href="/documentation"> Documentation</a>
                    </div>
                    <div className="tutorial">
                        <a href="/tutorial"> Tutorial Videos </a>
                    </div>
                    <div className="purchaseNow">
                        <a href="/purchase">Purchase Now</a>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Footer;