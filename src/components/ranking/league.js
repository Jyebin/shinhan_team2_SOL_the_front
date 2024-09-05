import '../../assets/friendPage/League.css';
import React, { useEffect, useState } from 'react';

const League = ({ league, endDate }) => {
    const translateXValue = {
        bronze: 0,
        silver: -60,
        gold: -140,
        platinum: -210,
        dia: -275,
    };
    const [remainingTime, setRemainingTime] = useState('');
    useEffect(() => {
        const calculateRemainingTime = () => {
            const now = new Date();
            const end = new Date(endDate);
            const difference = end - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60),
            );

            setRemainingTime(`${days}일 ${hours}시 ${minutes}분`);
        };

        calculateRemainingTime();
        const interval = setInterval(calculateRemainingTime, 60000); // 1분마다 업데이트

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, [endDate]);
    return (
        <div className="league-container">
            <div
                className="rank-image"
                style={{
                    transform: `translateX(${140 + translateXValue[league]}px)`,
                    transition: 'transform 0.4s ease',
                }}
            >
                {['bronze', 'silver', 'gold', 'platinum', 'dia'].map((kind) => (
                    <div
                        key={kind}
                        className={`rank-bird ${kind} ${kind === league ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className="league-kind">
                <p className="league-name">
                    {league === 'bronze' && '브론즈 리그🤎'}
                    {league === 'silver' && '실버 리그🩶'}
                    {league === 'gold' && '골드 리그💛'}
                    {league === 'platinum' && '플래티넘 리그💚'}
                    {league === 'dia' && '다이아 리그🩵'}
                </p>
                <p className="league-remain">남은 시간: {remainingTime}</p>
            </div>
        </div>
    );
};

export default League;
