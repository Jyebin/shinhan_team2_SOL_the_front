import React, { useState } from 'react';

function ISRegister2({ nextStep, prevStep }) {
    const [allAgreed, setAllAgreed] = useState(false);

    const handleAgree = () => {
        setAllAgreed(!allAgreed);
    };

    return (
        <div className="mainContainer">
            <h2>약관 동의</h2>
            <p>상품설명서/금융소비자 보호/관련 설명서 버튼이 존재합니다.</p>
            <input type="checkbox" checked={allAgreed} onChange={handleAgree} />
            <label>전체 동의</label>
            <br />
            <button onClick={prevStep}>이전</button>
            <button onClick={nextStep} disabled={!allAgreed}>
                다음
            </button>
        </div>
    );
}

export default ISRegister2;
