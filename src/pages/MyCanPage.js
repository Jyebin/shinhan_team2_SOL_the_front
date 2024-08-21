import React, { useState } from 'react';
import Container from '../components/common/Container';
import canUrl from '../assets/common/img/can_img.png';
import coinUrl from '../assets/common/img/coin_img.png';
import lineUrl from '../assets/common/img/line.png';
import '../assets/myCan/MyCanPage.css';

const balance = 49999;

const MyCanPage = () => {
    const [flipped, setFlipped] = useState(false);
    const [coins, setCoins] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 상태 추가

    const handleClick = () => {
        if (isAnimating) return; // 애니메이션 중이면 클릭 방지

        setIsAnimating(true); // 애니메이션 시작

        if (!flipped) {
            setFlipped(true);

            setTimeout(() => {
                const newCoins = [];
                const coinCount = Math.floor(balance / 10000);

                for (let i = 0; i < coinCount; i++) {
                    const position = {
                        left: '18%',
                        top: `${220 - i * 10}%`, // 각 동전이 층층이 쌓이도록 top 위치를 설정
                    };

                    setTimeout(() => {
                        newCoins.push(position);
                        setCoins([...newCoins]); // 새 배열로 업데이트

                        // 숫자가 1초 후에 사라지게 설정
                        setTimeout(() => {
                            setCoins((prevCoins) =>
                                prevCoins.map((coin, idx) =>
                                    idx === i
                                        ? { ...coin, displayNumber: false }
                                        : coin,
                                ),
                            );
                        }, 1000); // 1초 후에 숫자가 사라지게 설정
                    }, i * 300); // 0.3초 간격으로 동전이 떨어지도록 설정
                }

                // 모든 동전 애니메이션이 끝난 후에 클릭을 다시 활성화
                setTimeout(
                    () => {
                        setIsAnimating(false); // 애니메이션 종료
                    },
                    coinCount * 300 + 800,
                ); // 동전 떨어지는 시간 고려
            }, 600); // 깡통이 뒤집힌 후 0.6초 지연
        } else {
            setCoins([]); // 다시 클릭하면 동전을 초기화
            setIsAnimating(false); // 애니메이션 종료
        }
        setFlipped(!flipped);
    };

    return (
        <Container
            style={{
                backgroundColor: '#f3f6fb',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <div className="bucket-content">
                <h2 className="bucket-title">깡통에 얼마나 모였을까요?</h2>
                <p className="bucket-subtitle">깡통을 눌러 뒤집어주세요</p>
            </div>

            <div className="bucket-image-container" onClick={handleClick}>
                <img
                    src={canUrl}
                    alt="bucket"
                    className={`bucket-image ${flipped ? 'flipped' : ''}`}
                />
                {coins.map((position, index) => (
                    <div
                        key={index}
                        className="coin"
                        style={{ left: position.left, top: position.top }}
                    >
                        <img
                            src={coinUrl}
                            className="coin"
                            alt={`coin-${index}`}
                        />
                        <div
                            className="plus-one"
                            style={{
                                top: `${200 - index * 10}%`,
                                opacity:
                                    position.displayNumber === false ? 0 : 1,
                            }}
                        >
                            +{index + 1}
                        </div>
                    </div>
                ))}
            </div>
            <img src={lineUrl} className="line" alt="line" />
            <div className="button-container">
                <button className="terminate-button">깡통 해지하기</button>
            </div>
        </Container>
    );
};

export default MyCanPage;
