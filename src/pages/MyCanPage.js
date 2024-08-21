import React, { useState } from 'react';
import Container from '../components/common/Container';
import canUrl from '../assets/common/img/can_img.png';
import '../assets/myCan/MyCanPage.css';

const balance = 32099;

const MyCanPage = () => {
    const [flipped, setFlipped] = useState(false);
    const [coins, setCoins] = useState([]);

    const handleClick = () => {
        if (!flipped) {
            const newCoins = [];
            const coinCount = Math.floor(balance / 10000);

            for (let i = 0; i < coinCount; i++) {
                const position = {
                    left: `${Math.random() * 40 + 30}%`, // 깡통 중심에서 떨어지도록 위치 조정
                };

                setTimeout(() => {
                    newCoins.push(position);
                    setCoins([...newCoins]); // 새 배열로 업데이트
                }, i * 500); // 0.3초 간격으로 동전이 떨어지도록 설정
            }
        } else {
            setCoins([]); // 다시 클릭하면 동전을 초기화
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
                <div className="coins-container">
                    {coins.map((position, index) => (
                        <div
                            key={index}
                            className="coin"
                            style={{ left: position.left }}
                        >
                            💰
                        </div>
                    ))}
                </div>
            </div>

            <div className="button-container">
                <button className="terminate-button">깡통 해지하기</button>
            </div>
        </Container>
    );
};

export default MyCanPage;
