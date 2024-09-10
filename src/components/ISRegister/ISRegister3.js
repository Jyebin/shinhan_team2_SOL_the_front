import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/ISRegisterPage/ISRegister.css';

function ISRegister3({ formData, updateFormData }) {
    const [accountsData, setAccountsData] = useState([]);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [warning, setWarning] = useState('비밀번호 네 자리를 입력해주세요.');
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [shuffledDigits, setShuffledDigits] = useState([]);
    const [correctPassword, setCorrectPassword] = useState('');
    const [userID, setUserID] = useState(null); // User ID 상태 추가

    const navigate = useNavigate();
    const fetchAccountData = async () => {
        try {
            const res = await axios.get(
                `http://localhost:9070/api/account/list`,
                { withCredentials: true }, // 쿠키 포함
            );
            setAccountsData(res.data);
        } catch (err) {
            console.error('Failed to fetch accounts', err);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        handleShuffle();
        fetchUserID(); // 유저 ID를 먼저 가져옴
    }, []);

    const fetchUserID = async () => {
        try {
            const res = await axios.get('http://localhost:9070/api/user/info', {
                withCredentials: true, // 쿠키 포함
            });
            const id = res.data.userID;
            setUserID(id);
            fetchAccountData(); // userID 없이 계좌 데이터를 가져옴
        } catch (err) {
            console.error('Failed to fetch user ID', err);
        }
    };
    const handleAccountSelect = async (e) => {
        const selectedAccountID = e.target.value;
        const selectedAccount = accountsData.find(
            (account) => account.accountID === parseInt(selectedAccountID),
        );

        if (selectedAccount) {
            updateFormData({
                accountID: selectedAccount.accountID,
                accountName: selectedAccount.name,
                accountNumber: selectedAccount.number,
            });

            setEnteredPassword('');
            setWarning('비밀번호 네 자리를 입력해주세요.');
            setIsPasswordCorrect(false);
            setShowPasswordModal(true);

            try {
                const res = await axios.get(
                    `http://localhost:9070/api/account/password/${selectedAccountID}`, // 경로 수정
                    {
                        withCredentials: true, // 쿠키 포함
                    },
                );
                setCorrectPassword(res.data);
            } catch (error) {
                console.error('Failed to fetch account password', error);
                alert('비밀번호를 불러오는데 실패했습니다.');
            }
        } else {
            setShowPasswordModal(false);
            setIsPasswordCorrect(false);
        }
    };

    const handlePasswordChange = (digit) => {
        if (enteredPassword.length < 4) {
            setEnteredPassword((prev) => prev + digit);
            setWarning('비밀번호 네 자리를 입력해주세요.');
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
        const trimmedEnteredPassword = enteredPassword.trim();
        const trimmedCorrectPassword = correctPassword.toString().trim();

        if (trimmedEnteredPassword.length === 4) {
            if (trimmedEnteredPassword === trimmedCorrectPassword) {
                setIsPasswordCorrect(true);
                setShowPasswordModal(false);
                console.log('Password is correct!');
            } else {
                setWarning('올바른 비밀번호가 아닙니다. 다시 입력해주세요.');
                setEnteredPassword('');
                console.log('Password is incorrect.');
            }
        }
    };

    const handleNext = () => {
        navigate('/ISRegister4');
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
                        onChange={handleAccountSelect}
                        className="account-select"
                    >
                        <option value="">출금 계좌를 선택하세요</option>
                        {accountsData.map((acc) => (
                            <option key={acc.accountID} value={acc.accountID}>
                                {acc.name} {acc.number}
                            </option>
                        ))}
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
                                {shuffledDigits.map((digit) => (
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
                    onClick={handleNext}
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
