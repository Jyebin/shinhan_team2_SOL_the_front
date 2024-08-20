import React from 'react';

function ISInfo({ nextStep }) {
    return (
        <div className="mainContainer">
            <h2>적금 설명</h2>
            <p>여기에 적금 상품 설명이 들어갑니다.</p>
            <button onClick={nextStep}>가입하기</button>
        </div>
    );
}

export default ISInfo;
