import React, { useState, useEffect } from 'react';
import '../../assets/ISRegisterPage/ISRegister.css';

function ISRegister3({ nextStep, setFormData }) {
    const [account, setAccount] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [warning, setWarning] = useState('비밀번호 네 자리를 입력해주세요.');
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [shuffledDigits, setShuffledDigits] = useState([]);

    const correctPassword = '1234'; // 예시 비밀번호, 실제로는 서버에서 확인해야 합니다.

    useEffect(() => {
        handleShuffle(); // 초기화 시에 키패드 숫자를 셔플
    }, []);

    const handleAccountSelect = (e) => {
        const selectedAccount = e.target.value;

        if (selectedAccount === '') {
            // 기본 옵션이 선택된 경우
            setAccount(''); // 계좌 상태 초기화
            setShowPasswordModal(false); // 비밀번호 모달 닫기
            setIsPasswordCorrect(false); // 비밀번호 상태 초기화
        } else {
            // 다른 계좌가 선택된 경우
            setAccount(selectedAccount);
            setEnteredPassword('');
            setWarning('비밀번호 네 자리를 입력해주세요.');
            setIsPasswordCorrect(false);
            setShowPasswordModal(true); // 비밀번호 모달 열기
        }
    };

    const handlePasswordChange = (digit) => {
        if (enteredPassword.length < 4) {
            setEnteredPassword((prev) => prev + digit);
            setWarning('비밀번호 네 자리를 입력해주세요.'); // 입력 중엔 파란색 유지
        }
    };

    const handleBackspace = () => {
        setEnteredPassword((prev) => prev.slice(0, -1));
    };

    const handleShuffle = () => {
        const digits = [...Array(10).keys()];
        const shuffled = digits.sort(() => Math.random() - 0.5);
        setShuffledDigits(shuffled);
    };

    const handlePasswordSubmit = () => {
        if (enteredPassword.length === 4) {
            if (enteredPassword === correctPassword) {
                setIsPasswordCorrect(true);
                setShowPasswordModal(false);
                setFormData((prevData) => ({
                    ...prevData,
                    account: account, // 선택한 계좌를 저장
                }));
                nextStep();
            } else {
                setWarning('올바른 비밀번호가 아닙니다. 다시 입력해주세요.');
                setEnteredPassword('');
            }
        }
    };

    return (
        <div className="register-container">
            <div className="register-content">
                <br />
                <br />
                <h2>정보 입력</h2>
                <br />
                <div className="form-group">
                    <label>출금 계좌 선택</label>
                    <select
                        value={account}
                        onChange={handleAccountSelect}
                        className="account-select"
                    >
                        <option value="">출금 계좌를 선택하세요</option>
                        <option value="우리은행 1230-23423-233">
                            우리은행 1230-23423-233
                        </option>
                        <option value="신한은행 110-459-123456">
                            신한은행 110-459-123456
                        </option>
                    </select>
                    <p className="info-text">
                        깡통 적금을 연결할 계좌를 선택하세요.
                    </p>
                </div>
                {showPasswordModal && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <button
                                className="close-button"
                                onClick={() => setShowPasswordModal(false)}
                            >
                                &times;
                            </button>
                            <h3>계좌 비밀번호</h3>
                            <div className="password-display">
                                {[...Array(4)].map((_, i) => (
                                    <span key={i} className="password-dot">
                                        {enteredPassword[i] ? '•' : ' '}
                                    </span>
                                ))}
                            </div>
                            <p
                                className={
                                    warning ===
                                    '비밀번호 네 자리를 입력해주세요.'
                                        ? 'blue-text warning-text'
                                        : 'red-text warning-text'
                                }
                            >
                                {warning}
                            </p>
                            <div className="password-keypad">
                                {shuffledDigits.slice(0, 3).map((digit) => (
                                    <button
                                        key={digit}
                                        onClick={() =>
                                            handlePasswordChange(digit)
                                        }
                                    >
                                        {digit}
                                    </button>
                                ))}
                                {shuffledDigits.slice(3, 6).map((digit) => (
                                    <button
                                        key={digit}
                                        onClick={() =>
                                            handlePasswordChange(digit)
                                        }
                                    >
                                        {digit}
                                    </button>
                                ))}
                                {shuffledDigits.slice(6, 9).map((digit) => (
                                    <button
                                        key={digit}
                                        onClick={() =>
                                            handlePasswordChange(digit)
                                        }
                                    >
                                        {digit}
                                    </button>
                                ))}
                                <button onClick={handleShuffle}>재배열</button>
                                <button
                                    onClick={() =>
                                        handlePasswordChange(shuffledDigits[9])
                                    }
                                >
                                    {shuffledDigits[9]}
                                </button>
                                <button onClick={handleBackspace}>정정</button>
                            </div>
                            <button
                                onClick={handlePasswordSubmit}
                                className={`submit-button ${enteredPassword.length === 4 ? 'active' : ''}`}
                                disabled={enteredPassword.length !== 4}
                            >
                                확인
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <footer className="register-footer">
                <button
                    onClick={nextStep}
                    className="next-button"
                    disabled={!isPasswordCorrect}
                >
                    다음
                </button>
            </footer>
        </div>
    );
}

export default ISRegister3;
