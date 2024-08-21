import React, { useState } from 'react';
import '../../assets/ISRegisterPage/ISRegister.css';
import checkNo from '../../assets/common/img/check_no.png';
import checkYes from '../../assets/common/img/check_yes.png';
import checkNo2 from '../../assets/common/img/check_no2.png';
import checkYes2 from '../../assets/common/img/check_yes2.png';

function ISRegister2({ nextStep, formData, setFormData }) {
    const [agreements, setAgreements] = useState({
        all: false,
        terms1: false,
        terms2: false,
        terms3: false,
        terms4: false,
        terms5: false,
        terms6: false,
    });

    const handleAllChange = () => {
        const newValue = !agreements.all;
        setAgreements({
            all: newValue,
            terms1: newValue,
            terms2: newValue,
            terms3: newValue,
            terms4: newValue,
            terms5: newValue,
            terms6: newValue,
        });
    };

    const handleIndividualChange = (term) => {
        setAgreements((prevState) => {
            const newState = {
                ...prevState,
                [term]: !prevState[term],
            };
            newState.all = Object.values(newState).slice(1).every(Boolean);
            return newState;
        });
    };

    const handleNext = () => {
        // 다음 단계로 넘어가기 전에 필요한 데이터 저장
        setFormData({
            ...formData,
            agreements: agreements,
        });
        nextStep();
    };

    return (
        <div className="register-container">
            <div className="register-content isregister2">
                <br />
                <br />
                <h2>약관에 동의해 주세요</h2>
                <br />
                <div className="terms-container">
                    <div
                        className="terms-item all-agree"
                        onClick={handleAllChange}
                    >
                        <img
                            src={agreements.all ? checkYes : checkNo}
                            alt="check"
                            className="checkbox-img"
                        />
                        <label className="all-agree-label">전체 동의</label>
                    </div>
                    <hr className="custom-hr" />
                    <div
                        className="terms-item"
                        onClick={() => handleIndividualChange('terms1')}
                    >
                        <img
                            src={agreements.terms1 ? checkYes2 : checkNo2}
                            alt="check"
                            className="checkbox-img-small"
                        />
                        <label>[필수] 예금거래기본약관</label>
                    </div>

                    <div
                        className="terms-item"
                        onClick={() => handleIndividualChange('terms2')}
                    >
                        <img
                            src={agreements.terms2 ? checkYes2 : checkNo2}
                            alt="check"
                            className="checkbox-img-small"
                        />
                        <label>[필수] 적립식예금약관</label>
                    </div>

                    <div
                        className="terms-item"
                        onClick={() => handleIndividualChange('terms3')}
                    >
                        <img
                            src={agreements.terms3 ? checkYes2 : checkNo2}
                            alt="check"
                            className="checkbox-img-small"
                        />
                        <label>[필수] 신한 쏠거지 깡통 적금 특약</label>
                    </div>

                    <div
                        className="terms-item"
                        onClick={() => handleIndividualChange('terms4')}
                    >
                        <img
                            src={agreements.terms4 ? checkYes2 : checkNo2}
                            alt="check"
                            className="checkbox-img-small"
                        />
                        <label>[필수] 비과세종합저축특약</label>
                    </div>

                    <div
                        className="terms-item"
                        onClick={() => handleIndividualChange('terms5')}
                    >
                        <img
                            src={agreements.terms5 ? checkYes2 : checkNo2}
                            alt="check"
                            className="checkbox-img-small"
                        />
                        <label>[필수] 계좌간자동이체약관</label>
                    </div>

                    <div
                        className="terms-item"
                        onClick={() => handleIndividualChange('terms6')}
                    >
                        <img
                            src={agreements.terms6 ? checkYes2 : checkNo2}
                            alt="check"
                            className="checkbox-img-small"
                        />
                        <label>
                            [필수] 불법·탈법 차명거래 금지 설명 확인서
                        </label>
                    </div>
                </div>
            </div>

            <footer className="register-footer">
                <button
                    onClick={handleNext}
                    disabled={
                        !Object.values(agreements).slice(1).every(Boolean)
                    }
                    className="next-button"
                >
                    다음
                </button>
            </footer>
        </div>
    );
}

export default ISRegister2;
