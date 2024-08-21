import React from 'react';
import '../../assets/ISRegisterPage/ISInfo.css';

import infoImage0 from '../../assets/ISRegisterPage/img/info0.png';
import infoImage1 from '../../assets/ISRegisterPage/img/info1.png';
import infoImage2 from '../../assets/ISRegisterPage/img/info2.png';

const ISInfo = ({ nextStep }) => {
    return (
        <div className="isinfo-container">
            <main className="isinfo-main">
                <div className="product-info">
                    <br />
                    <br />
                    <h2 className="product-title">신한 쏠거지 깡통 적금</h2>
                    <div className="tags">
                        <span>#20회이상</span>
                        <span>#쏠거지출석인증시</span>
                        <span>#추가우대금리</span>
                    </div>

                    <img src={infoImage0} alt="이미지" className="info-image" />

                    <div className="interest-info">
                        <div className="interest-rate">
                            <span>이자율</span>
                            <strong>기본 연 8.00%</strong>
                            <span className="highlight">최고 연 10.00%</span>
                            <span>(6개월 세전)</span>
                        </div>
                        <div className="deposit-limit">
                            <span>저축한도</span>
                            <strong>
                                고객별
                                <br />월 10만원
                            </strong>
                        </div>
                    </div>

                    <button className="join-button" onClick={nextStep}>
                        가입하기
                    </button>
                </div>
                <section className="additional-info">
                    <p>
                        쏠거지 회원가입만 해도{' '}
                        <span className="highlight2">연 1.0% +</span>
                        <br />
                        쏠거지 출석체크 20회 이상하면{' '}
                        <span className="highlight2">연 2.0%</span>
                        <br />
                        <span className="highlight2">우대금리 제공!</span>
                    </p>
                    <img src={infoImage1} alt="이미지" className="info-image" />
                </section>

                <section className="promo-info">
                    <p>
                        적금을 가입하면{' '}
                        <span className="highlight2">
                            땡겨요 2,000원
                            <br />
                            쿠폰이 최대 다섯 장!
                        </span>
                    </p>
                    <img
                        src={infoImage2}
                        alt="이미지"
                        className="promo-image"
                    />
                </section>
            </main>
        </div>
    );
};

export default ISInfo;
