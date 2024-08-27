import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/ISRegisterPage/ISRegister.css';
import buttonOff from '../../assets/common/img/check_no.png';
import buttonOn from '../../assets/common/img/check_yes.png';

const interestRates = {
    baseRate: 7.0,
    attendanceBonus: 2.0,
    signupBonus: 1.0,
};

const ISRegister1 = ({ formData, updateFormData }) => {
    const navigate = useNavigate();

    // Define the isScrolled state
    const [isScrolled, setIsScrolled] = useState(false);
    const [totalInterestRate, setTotalInterestRate] = useState(
        parseFloat(formData.totalInterestRate) || interestRates.baseRate,
    );
    const [selectedBonuses, setSelectedBonuses] = useState({
        attendance: false,
        signup: false,
    });

    const contentRef = useRef(null);

    const handleScroll = useCallback(() => {
        if (contentRef.current) {
            const { scrollTop, scrollHeight, clientHeight } =
                contentRef.current;
            setIsScrolled(scrollTop + clientHeight >= scrollHeight - 10); // 스크롤 감지를 위한 조건 조정
        }
    }, []);

    useEffect(() => {
        // 페이지가 마운트될 때마다 스크롤을 맨 위로 이동
        window.scrollTo(0, 0);

        const contentElement = contentRef.current;
        if (contentElement) {
            contentElement.addEventListener('scroll', handleScroll);
        }

        // 모바일 환경에서도 스크롤을 감지하기 위해 window의 스크롤 이벤트를 사용
        window.addEventListener('scroll', handleScroll);

        return () => {
            if (contentElement) {
                contentElement.removeEventListener('scroll', handleScroll);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        // 다른 페이지에서 돌아올 때 항상 이율을 초기화
        setTotalInterestRate(interestRates.baseRate);
        setSelectedBonuses({
            attendance: false,
            signup: false,
        });
    }, []);

    const handleCheckboxChange = useCallback(
        (bonusType) => {
            const updatedBonuses = {
                ...selectedBonuses,
                [bonusType]: !selectedBonuses[bonusType],
            };

            setSelectedBonuses(updatedBonuses);

            const newRate =
                interestRates.baseRate +
                (updatedBonuses.attendance
                    ? interestRates.attendanceBonus
                    : 0) +
                (updatedBonuses.signup ? interestRates.signupBonus : 0);

            setTotalInterestRate(newRate);
        },
        [selectedBonuses],
    );

    const handleNext = () => {
        updateFormData({
            totalInterestRate: totalInterestRate.toFixed(2),
        });
        navigate('/ISRegister2');
    };

    return (
        <div className="register-container">
            <div className="register-content isregister1" ref={contentRef}>
                <br />
                <h3>
                    상품의 중요사항을 <br />
                    충분히 읽고 확인해주세요.
                </h3>
                <p>
                    금융소비자보호법 제19조 제1항에서 규정하고 있는 상품
                    중요사항입니다.
                </p>

                <div className="interest-calculation">
                    <p>내 예상금리를 알아보세요.</p>
                    <div className="interest-box">
                        <span className="interest-label">연 예상금리</span>
                        <span className="interest-value">
                            연 {totalInterestRate.toFixed(2)}%
                        </span>
                    </div>
                    <div className="interest-details">
                        <span>
                            기본금리: {interestRates.baseRate.toFixed(2)}% +
                            우대금리:
                            {(
                                totalInterestRate - interestRates.baseRate
                            ).toFixed(2)}
                            %
                        </span>
                    </div>
                </div>

                <h4>우대금리 조건 선택</h4>
                <ul className="conditions-list">
                    <li>
                        <label className="condition-label">
                            <div
                                className="condition-text"
                                onClick={() =>
                                    handleCheckboxChange('attendance')
                                }
                            >
                                <img
                                    src={
                                        selectedBonuses.attendance
                                            ? buttonOn
                                            : buttonOff
                                    }
                                    alt="checkbox"
                                    className="checkbox-img"
                                />
                                쏠거지 출석체크 20회 이상시
                            </div>
                            <span className="condition-rate">연 2.00%</span>
                        </label>
                    </li>
                    <li>
                        <label className="condition-label">
                            <div
                                className="condition-text"
                                onClick={() => handleCheckboxChange('signup')}
                            >
                                <img
                                    src={
                                        selectedBonuses.signup
                                            ? buttonOn
                                            : buttonOff
                                    }
                                    alt="checkbox"
                                    className="checkbox-img"
                                />
                                회원 가입시
                            </div>
                            <span className="condition-rate">연 1.00%</span>
                        </label>
                    </li>
                </ul>

                <div className="important-notes">
                    <p>
                        “추가 우대이자율 예상”은 예금 가입 전 이해를 위해
                        제공하는 시뮬레이션으로 실제 우대이자율 대상 여부는 가입
                        시 확인이 가능합니다.
                    </p>
                    <p>
                        “추가 우대이자율 예상”은 예금 가입 전 이해를 위해
                        제공하는 시뮬레이션으로 실제 우대이자율 대상 여부는 가입
                        시 확인이 가능합니다.
                    </p>
                    <p>
                        “추가 우대이자율 예상”은 예금 가입 전 이해를 위해
                        제공하는 시뮬레이션으로 실제 우대이자율 대상 여부는 가입
                        시 확인이 가능합니다.
                    </p>
                    <p>
                        “추가 우대이자율 예상”은 예금 가입 전 이해를 위해
                        제공하는 시뮬레이션으로 실제 우대이자율 대상 여부는 가입
                        시 확인이 가능합니다.
                    </p>
                    <p>
                        기본이자율은 가입일에 고시된 “신한 땡겨요 적금”의
                        기본이자율을 적용합니다.
                    </p>
                    <p>
                        실제 우대이자율은 예금 기간 중에 요건을 충족한 경우
                        적용됩니다.
                    </p>
                    <p>
                        우대이자율은 중도해지 한 계좌에 대해서는 적용하지
                        않으며, 만기해지 시에만 지급됩니다.
                    </p>
                </div>
            </div>

            <footer className="register-footer">
                <button
                    onClick={handleNext}
                    disabled={!isScrolled}
                    className="next-button"
                >
                    확인
                </button>
            </footer>
        </div>
    );
};

export default ISRegister1;
