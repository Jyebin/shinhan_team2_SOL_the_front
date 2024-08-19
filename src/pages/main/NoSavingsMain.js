// 적금이 없을 때 활성화되는 페이지

import React from 'react';

import '../../assets/mainPage/MainPage.css';
import '../../assets/mainPage/NoSavingsMain.css';

const NoSavingsMain = () => {
    return (
        <div className="mobileViewContainer empty">
            <button className="mainBtn makeCan"></button>
        </div>
    );
};

export default NoSavingsMain;
