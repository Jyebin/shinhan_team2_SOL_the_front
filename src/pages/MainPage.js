import React from 'react';
import '../assets/mainPage/MainPage.css';
import mainEmptyURL from '../assets/mainPage/main_empty.png';

const MainPage = () => {
    return (
        <div className="mobileViewContainer">
            <img src={mainEmptyURL} alt="Main View" className="mainEmpty_img" />
        </div>
    );
};

export default MainPage;
