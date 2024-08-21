import React from 'react';
import '../../assets/ISRegisterPage/ISRegister.css';

function ISRegister4({ nextStep, formData }) {
    // 오늘 날짜 구하기
    const today = new Date().toISOString().slice(0, 10);

    // formData에서 필요한 데이터 가져오기
    const selectedAccount = formData.account || '계좌 정보 없음';
    const appliedInterestRate = formData.totalInterestRate || '0.00';

    return (
        <div className="register-container">
            <div className="register-content isregister4">
                <br />
                <br />
                <h2>적금 정보확인</h2>
                <h3>적금 가입 정보를 확인하세요</h3>
                <div className="info-section">
                    <div className="info-row">
                        <span className="label">출금계좌</span>
                        <span className="value">{selectedAccount}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">적용이율</span>
                        <span className="value">{appliedInterestRate}%</span>
                    </div>
                    <div className="info-row">
                        <span className="label">입금방식</span>
                        <span className="value">결제시 자동 입금</span>
                    </div>
                    <div className="info-row">
                        <span className="label">가입일</span>
                        <span className="value">{today}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">만기일</span>
                        <span className="value">해지시</span>
                    </div>
                    <div className="info-row">
                        <span className="label highlight">최대금액</span>
                        <span className="value highlight">10만원</span>
                    </div>
                    <div className="info-row">
                        <span className="label">납입 금액</span>
                        <span className="value">
                            연결된 통장의 1천원 미만 잔돈 자동 저축
                        </span>
                    </div>
                </div>
            </div>
            <footer className="register-footer">
                <button onClick={nextStep} className="next-button">
                    다음
                </button>
            </footer>
        </div>
    );
}

export default ISRegister4;
