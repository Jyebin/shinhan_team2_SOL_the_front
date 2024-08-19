// 공통 컴포넌트

import React from 'react';

import '../../assets/mainPage/MainPage.css';
import '../../assets/mainPage/ActiveSavingsMain.css';
import '../../assets/mainPage/NoSavingsMain.css';

const SavingsMain = ({ containerClass, buttonClass }) => {
    return (
        <div className={`mainContainer ${containerClass}`}>
            <button className="attendanceBtn mainBtn"></button>
            <button className={`mainBtn ${buttonClass}`}></button>
        </div>
    );
};

export default SavingsMain;
