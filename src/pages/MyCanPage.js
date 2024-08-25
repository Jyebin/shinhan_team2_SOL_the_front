import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Container from '../components/common/Container';
import CanContent from '../components/myCan/CanContent';
import CanImageContainer from '../components/myCan/CanImageContainer';
import TerminateButton from '../components/myCan/TerminateButton';
import ConfirmModal from '../components/myCan/ConfirmModal'; // ConfirmModal 컴포넌트 추가

import lineUrl from '../assets/common/img/line.png';
import '../assets/myCan/MyCanPage.css';

const days = 40;
const interestRate = days >= 20 ? '10.0' : '8.0';

const MyCanPage = () => {
    const location = useLocation();
    const { account } = location.state;
    const accountID = account.accountID;

    const [amount, setAmount] = useState(0);
    const [coinFlipped, setCoinFlipped] = useState(false);
    const [coins, setCoins] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showModal, setShowModal] = useState(false); // 모달 상태 추가

    const getCanAmount = async (accountID) => {
        try {
            const res = await axios.get('http://localhost:9070/account/can/amount?accountID=' + accountID);
            setAmount(res.data);
        } catch (error) {
            console.error('Failed to fetch "getCanAmount"', error);
        }
    };

    getCanAmount(accountID);

    const onClick = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        if (!coinFlipped) {
            setCoinFlipped(true);

            setTimeout(() => {
                const newCoins = [];

                const coinCount = Math.floor(amount / 10000);

                for (let i = 0; i < coinCount; i++) {
                    const position = {
                        left: '18%',
                        top: `${200 - i * 10}%`,
                    };

                    setTimeout(() => {
                        newCoins.push(position);
                        setCoins([...newCoins]);

                        setTimeout(() => {
                            setCoins((prevCoins) =>
                                prevCoins.map((coin, idx) =>
                                    idx === i
                                        ? { ...coin, displayNumber: false }
                                        : coin,
                                ),
                            );
                        }, 1000);
                    }, i * 300);
                }

                setTimeout(
                    () => {
                        setIsAnimating(false);
                    },
                    coinCount * 300 + 800,
                );
            }, 600);
        } else {
            setCoins([]);
            setIsAnimating(false);
        }
        setCoinFlipped(!coinFlipped);
    };

    const handleTerminateClick = () => {
        setShowModal(true); // 모달을 띄우기 위해 상태를 true로 설정
    };

    const handleCloseModal = () => {
        setShowModal(false); // 모달 닫기
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
                flipped={coinFlipped}
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
