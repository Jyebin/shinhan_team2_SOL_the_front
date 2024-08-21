import React from 'react';
import '../../assets/myCan/TerminateButton.css';

const TerminateButton = ({ onClick }) => {
    return (
        <div className="button-container">
            <button className="terminate-button" onClick={onClick}>
                깡통 해지하기
            </button>
        </div>
    );
};

export default TerminateButton;
