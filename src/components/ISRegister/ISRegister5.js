import React from 'react';

function ISRegister5({ prevStep }) {
    return (
        <div className="mainContainer">
            <h2>가입 완료</h2>
            <p>가입이 완료되었습니다.</p>
            <button onClick={() => (window.location.href = '/')}>
                메인으로 이동
            </button>
            <button onClick={prevStep}>정보 다시 확인</button>
        </div>
    );
}

export default ISRegister5;
