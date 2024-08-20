import React from 'react';

function ISRegister4({ nextStep, prevStep }) {
    return (
        <div className="mainContainer">
            <h2>정보 확인</h2>
            <p>계좌명, 출금계좌, 적용이율, 최대금액 등을 확인합니다.</p>
            <button onClick={prevStep}>이전</button>
            <button onClick={nextStep}>다음</button>
        </div>
    );
}

export default ISRegister4;
