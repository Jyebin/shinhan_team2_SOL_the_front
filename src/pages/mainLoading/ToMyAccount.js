import React, { useEffect, useState } from 'react';
import '../../assets/mainLoading/ToMyAccount.css';

import walking1 from '../../assets/mainLoading/img/walking.png';
import walking2 from '../../assets/mainLoading/img/walking2.png';
import rightImage from '../../assets/mainLoading/img/right.png';
import bg from '../../assets/mainLoading/img/bg.png';

const ToMyAccount = () => {
    const [progress, setProgress] = useState(0);
    const [leftImageSrc, setLeftImageSrc] = useState(walking1);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return 100;
                }
            });
        }, 20); // 로딩 바 속도 조절

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const imageChangeInterval = setInterval(() => {
            setLeftImageSrc((prevImage) =>
                prevImage === walking1 ? walking2 : walking1,
            );
        }, 250); // 0.25초마다 이미지 교체

        return () => clearInterval(imageChangeInterval);
    }, []);

    return (
        <div className="loading-container">
            <img src={bg} alt="loading" className="loading-background" />
            <div className="foreground">
                <img
                    src={leftImageSrc}
                    alt="Left Image"
                    className="left-image"
                    style={{
                        transform: `translate(${progress}px, -${progress}px)`,
                        opacity: progress < 70 ? 1 : 0,
                        transition: 'transform 0.18s linear, opacity 0.3s ease',
                    }}
                />
                <img
                    src={rightImage}
                    alt="Right Image"
                    className="right-image"
                    style={{ opacity: progress >= 70 ? 1 : 0 }}
                />
            </div>
            <div
                className="character"
                style={{ transform: `translateX(${progress}%)` }}
            ></div>

            <div className="loading-bar-container">
                <div
                    className="loading-bar"
                    style={{
                        width: `${progress}%`,
                    }}
                >
                    <span className="loading-text">
                        지금까지 모은 폐지 확인하러 가는 중 . . .
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ToMyAccount;
