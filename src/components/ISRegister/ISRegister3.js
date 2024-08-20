import React, { useState } from 'react';

function ISRegister3({ nextStep, prevStep }) {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');

    const handleNext = () => {
        if (!password) {
            setWarning('비밀번호를 입력하세요.');
        } else {
            nextStep();
        }
    };

    return (
        <div className="mainContainer">
            <h2>정보 입력</h2>
            <select
                value={account}
                onChange={(e) => setAccount(e.target.value)}
            >
                <option value="">출금 계좌를 선택하세요</option>
                <option value="account1">계좌1</option>
                <option value="account2">계좌2</option>
            </select>
            <br />
            <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {warning && <p style={{ color: 'red' }}>{warning}</p>}
            <br />
            <button onClick={prevStep}>이전</button>
            <button onClick={handleNext}>다음</button>
        </div>
    );
}

export default ISRegister3;
