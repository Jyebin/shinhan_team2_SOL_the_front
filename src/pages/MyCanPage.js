import React, { useState } from 'react';
import Container from '../components/common/Container';
import canUrl from '../assets/common/img/can_img.png';
import '../assets/myCan/MyCanPage.css';

const MyCanPage = () => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
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
            </div>

            <div className="button-container">
                <button className="terminate-button">깡통 해지하기</button>
            </div>
        </Container>
    );
};

export default MyCanPage;
