// 적금이 있을 때 활성화되는 페이지

import React from 'react';
import '../../assets/mainPage/MainPage.css';
import '../../assets/mainPage/ActiveSavingsMain.css';

const ActiveSavingsMain = () => {
    return (
        <div className="mobileViewContainer active">
            <button className="mainBtn checkCan"></button>
        </div>
    );
};

export default ActiveSavingsMain;
