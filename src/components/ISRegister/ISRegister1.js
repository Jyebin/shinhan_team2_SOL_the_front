import React, { useState, useEffect, useRef } from 'react';
import '../../assets/ISRegisterPage/ISRegister1.css';

function ISRegister1({ nextStep }) {
    // prevStep 제거
    const [isScrolled, setIsScrolled] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsScrolled(true);
                }
            },
            {
                root: null,
                threshold: 1.0, // 100%가 뷰포트에 보일 때만 트리거됨
            },
        );

        if (bottomRef.current) {
            observer.observe(bottomRef.current);
        }

        return () => {
            if (bottomRef.current) {
                observer.unobserve(bottomRef.current);
            }
        };
    }, []);

    return (
        <div className="register-container">
            {/* Header가 이미 있기 때문에 여기서는 별도의 헤더를 추가하지 않습니다 */}

            <br />
            <br />
            <div className="register-content">
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
                        <span className="interest-value">연 10.00%</span>
                    </div>
                    <div className="interest-details">
                        <span>기본금리</span>
                        <span>% + 우대금리</span>
                        <span>7.00%</span>
                        <span>3.00%</span>
                    </div>
                </div>

                <h4>우대금리 조건 선택</h4>
                <ul className="conditions-list">
                    <li>
                        <input type="checkbox" checked readOnly /> 쏠거지
                        출석체크 주 3회 이상시
                        <span className="condition-rate">연 2.00%</span>
                    </li>
                    <li>
                        <input type="checkbox" checked readOnly /> 회원 가입
                        <span className="condition-rate">연 1.00%</span>
                    </li>
                </ul>

                <div className="important-notes">
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
                    onClick={nextStep}
                    disabled={!isScrolled}
                    className="next-button"
                >
                    확인
                </button>
            </footer>
        </div>
    );
}

export default ISRegister1;
