import React, { useState } from 'react';
import Container from '../components/common/Container';
import CanContent from '../components/myCan/CanContent';
import CanImageContainer from '../components/myCan/CanImageContainer';
import TerminateButton from '../components/myCan/TerminateButton';
import ConfirmModal from '../components/myCan/ConfirmModal';

import lineUrl from '../assets/common/img/line.png';
import '../assets/myCan/MyCanPage.css';

const balance = 49999;
const days = 40;
const interestRate = days >= 20 ? '10.0' : '8.0';

const MyCanPage = () => {
    const [canFlipped, setCanFlipped] = useState(false);
    const [coins, setCoins] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const onClick = async () => {
        if (isAnimating) return;
        // 한 번 클릭한 상태로 애니메이션이 실행 중이면 block

        setIsAnimating(true);
        // 클릭하면 isAnimation true로 state 변경

        if (!canFlipped) {
            // 깡통이 안 뒤집힌 상태라면
            // coin
            setCanFlipped(true); // 깡통 뒤집기
            const newCoins = [];
            const coinCount = Math.floor(balance / 10000); // 코인 개수 계산

            for (let i = 0; i < coinCount; i++) {
                // 코인 떨어트리기 + 카운트 올리기
                const position = {
                    // 떨어질 포지션 계산
                    left: '18%',
                    top: `${200 - i * 10}%`, // 한 층씩 쌓이게
                };

                await new Promise((resolve) => setTimeout(resolve, i * 300)); // Promise를 통한 비동기 작업 관리
                newCoins.push(position);
                setCoins((prevCoins) => [...prevCoins, position]);

                await new Promise((resolve) => setTimeout(resolve, 1000));
                setCoins((prevCoins) =>
                    prevCoins.map((coin, idx) =>
                        idx === i ? { ...coin, displayNumber: false } : coin,
                    ),
                );
            }

            setTimeout(
                () => {
                    setIsAnimating(false);
                },
                coinCount * 300 + 800,
            );
        } else {
            setCoins([]);
            setIsAnimating(false);
        }

        setCanFlipped((prev) => !prev);
    };

    const handleTerminateClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
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
            <br />
            <br />
            <CanContent />
            <CanImageContainer
                flipped={canFlipped}
                coins={coins}
                onClick={onClick}
            />
            <img src={lineUrl} className="my-can-line" alt="line" />
            <div className="my-interest-rate">
                총 {days}일 출석 완료로 <br /> 현재 적용중인 이율은
                <span> {interestRate}% </span>입니다.
            </div>
            <TerminateButton onClick={handleTerminateClick} />
            {showModal && <ConfirmModal onClose={handleCloseModal} />}
        </Container>
    );
};

export default MyCanPage;
