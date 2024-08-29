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
                        “추가 우대이자율 예상”은 예금 가입 전 이해를 돕기 위해
                        제공하는 시뮬레이션입니다. 이 시뮬레이션은 예금 상품의
                        우대이자율 적용 가능성을 예측하며, 실제 우대이자율 대상
                        여부는 예금 가입 시점에서 확인 가능합니다.
                    </p>
                    <p>
                        본 시뮬레이션에서 제공되는 이자율은 신한 땡겨요 적금의
                        기본이자율에 우대 조건을 더한 예상치이며, 가입 당시의
                        경제 상황 및 금리 변동에 따라 다를 수 있습니다.
                        기본이자율은 가입일 기준으로 적용되는 고시 이자율을
                        따릅니다.
                    </p>
                    <p>
                        우대이자율은 예금 기간 중에 정해진 요건을 충족할
                        경우에만 적용됩니다. 요건을 충족하지 못할 경우
                        우대이자율이 적용되지 않으며, 이로 인해 발생하는 금리
                        차이에 대해 은행은 책임지지 않습니다.
                    </p>
                    <p>
                        우대이자율 요건에는 매월 일정 금액 이상의 입금, 출석
                        체크, 자동이체 등 다양한 조건이 포함될 수 있으며,
                        구체적인 요건은 상품 설명서에서 확인 가능합니다. 모든
                        우대이자율 조건은 예금 가입 시 확정되지 않으며, 가입 후
                        고객의 조건 충족 여부에 따라 변동될 수 있습니다.
                    </p>
                    <p>
                        또한, 우대이자율은 중도해지한 계좌에 대해서는 적용되지
                        않습니다. 중도해지 시에는 중도해지 이율이 적용되며,
                        우대이자율은 제외됩니다. 이는 예금 가입 시 명시된 조건에
                        따라 결정됩니다.
                    </p>
                    <p>
                        만기 해지 시에는 우대이자율을 포함한 모든 이자가
                        정상적으로 지급되며, 고객이 설정한 만기일 이후에는
                        예금이 자동으로 연장되지 않으므로 만기일 전에 고객의
                        계좌를 반드시 확인해야 합니다. 만기 연장을 원할 경우,
                        고객은 만기일 이전에 연장 신청을 해야 합니다.
                    </p>
                    <p>
                        본 상품은 비과세종합저축에 해당하지 않으며, 이자소득세가
                        부과됩니다. 이자소득세는 현행 세법에 따라 원천징수되며,
                        비과세 혜택을 받을 수 있는 상품으로 전환하려는 고객은
                        반드시 사전에 상담을 받으셔야 합니다.
                    </p>
                    <p>
                        예금자 보호법에 따라 본 상품의 예금은 1인당 최대 5천만
                        원까지 보호됩니다. 예금 금액이 이 한도를 초과할 경우
                        초과 금액에 대한 보호는 제공되지 않으며, 이에 따른 손실
                        위험은 고객이 부담해야 합니다.
                    </p>
                    <p>
                        본 적금 상품은 신한SOL 어플리케이션을 통해 가입할 수
                        있으며, 가입 절차 중 발생하는 모든 데이터는 안전하게
                        암호화되어 전송됩니다. 그러나, 고객이 비밀번호나 인증
                        정보를 타인에게 노출할 경우 발생하는 문제에 대해 은행은
                        책임을 지지 않습니다.
                    </p>
                    <p>
                        예금 가입 후 7일 이내에 계약을 철회할 수 있으며, 철회
                        시에는 어떠한 위약금이나 수수료도 부과되지 않습니다.
                        그러나, 철회 시에는 이자가 지급되지 않으며, 가입일로부터
                        7일 이후에는 중도해지 이율이 적용될 수 있습니다.
                    </p>
                    <p>
                        고객은 예금 가입 시 제공되는 모든 정보에 대해 정확하게
                        이해하고 가입해야 하며, 은행은 제공된 정보가 잘못 이해된
                        경우 발생하는 문제에 대해 책임을 지지 않습니다. 특히,
                        금리, 세율, 가입 조건 등은 수시로 변경될 수 있으므로,
                        가입 전에 반드시 최신 정보를 확인하시기 바랍니다.
                    </p>
                    <p>
                        본 약관에 명시되지 않은 사항에 대해서는 신한은행의 일반
                        예금 약관을 따르며, 추가적으로 발생하는 모든 분쟁은
                        은행의 본점 소재지 관할 법원에서 해결됩니다. 고객은 본
                        상품에 가입함으로써 이 약관에 동의하게 되며, 이 약관은
                        법적 효력을 가집니다.
                    </p>
                    <p>
                        추가 우대이자율 적용 여부는 본 약관에서 정해진 조건을
                        모두 충족한 경우에만 가능하며, 조건 충족 여부는 은행의
                        기준에 따라 심사됩니다. 조건 충족을 위해 제출된 서류나
                        증명서의 위조 또는 변조가 확인될 경우, 모든 우대 혜택은
                        취소되며, 법적 책임이 부과될 수 있습니다.
                    </p>
                    <p>
                        고객의 불편사항이나 문의사항이 있을 경우, 신한SOL
                        고객센터를 통해 문의할 수 있으며, 고객센터 운영 시간은
                        평일 9시부터 18시까지입니다. 긴급한 문의사항은 24시간
                        응대 가능한 콜센터를 통해 처리됩니다.
                    </p>
                    <p>
                        본 약관은 2024년 8월 1일부터 적용되며, 은행의 정책
                        변화에 따라 사전 통지 없이 변경될 수 있습니다. 변경된
                        약관은 신한SOL 어플리케이션 및 은행 홈페이지를 통해
                        공지되며, 공지된 약관에 따라 예금 운영이 이루어집니다.
                    </p>
                    <p>
                        최종적으로, 고객은 본 상품 가입 시 제공된 모든 정보를
                        충분히 이해하였으며, 본 약관에 명시된 모든 내용에
                        동의함을 확인합니다. 고객은 예금 가입이 완료된 이후에도
                        지속적으로 본 상품의 운영 및 조건을 확인할 책임이
                        있습니다.
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
