import React from 'react';
import '../../assets/ISRegisterPage/ISInfo.css';

const ISInfo = ({ nextStep }) => {
    return (
        <div className="isinfo-container">
            <main className="isinfo-main">
                <h2 className="product-title">신한 쓸거지 깡통 적금</h2>
                <div className="tags">
                    <span>#20회이상</span>
                    <span>#출석인증하면</span>
                    <span>#추가우대금리</span>
                </div>

                <div className="interest-info">
                    <div className="interest-rate">
                        <span>이자율</span>
                        <strong>기본 연 8.00%</strong>
                        <span className="highlight">최고 연 10.00%</span>
                        <span>(6개월 세전)</span>
                    </div>
                    <div className="deposit-limit">
                        <span>저축한도</span>
                        <strong>고객별 월 10만원</strong>
                    </div>
                </div>

                <button className="join-button" onClick={nextStep}>
                    가입하기
                </button>

                <section className="additional-info">
                    <p>
                        쓸거지 회원가입만 해도{' '}
                        <span className="highlight">연 1.0%</span> +<br />
                        쓸거지 출석체크 20회 이상하면{' '}
                        <span className="highlight">연 2.0%</span>
                        <br />
                        우대금리 제공!
                    </p>
                    <img
                        src="/path/to/your/image.png"
                        alt="이미지"
                        className="info-image"
                    />
                </section>

                <section className="promo-info">
                    <p>적금을 가입하면 땡겨요 2,000원 쿠폰이 최대 다섯 장!</p>
                    <span>2024년 12월 31일까지 받을 수 있어요</span>
                    <img
                        src="/path/to/your/second-image.png"
                        alt="이미지"
                        className="promo-image"
                    />
                </section>
            </main>
        </div>
    );
};

export default ISInfo;
