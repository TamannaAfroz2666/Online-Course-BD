import React from 'react';
import './InstructionPage.css';

const InstructionPage = () => {
    return (
        <div className='Instruction'>
            <div className="instructionHead">
                <h1>Our Instruction</h1>
                <div className="horizontalInstruction">
                    <span><hr className='firstInstruction' size ={4} color='orange'  /> </span>
                    <span><hr size ={4} color='orange' className='secondInstruction'/></span>
                    <span> <hr size ={4} color='orange' className='firstInstruction'/> </span>
                </div>
            </div>

            
        </div>
    );
};

export default InstructionPage;