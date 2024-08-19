// 공통 컴포넌트

import React from 'react';

import '../../assets/mainPage/MainPage.css';
import '../../assets/mainPage/ActiveSavingsMain.css';
import '../../assets/mainPage/NoSavingsMain.css';
import Container from '../common/Container';

const SavingsMain = ({ buttonClass, imgSrc }) => {
    return (
        <Container>
            <img src={imgSrc} alt="mainImage" className="mainBackground" />
            <button className="attendanceBtn mainBtn"></button>
            <button className={`mainBtn ${buttonClass}`}></button>
        </Container>
    );
};

export default SavingsMain;
