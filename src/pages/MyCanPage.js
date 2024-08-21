import React, { useState } from 'react';
import Container from '../components/common/Container';
import CanContent from '../components/myCan/CanContent';
import CanImageContainer from '../components/myCan/CanImageContainer';
import TerminateButton from '../components/myCan/TerminateButton';

import lineUrl from '../assets/common/img/line.png';

const balance = 49999;

const MyCanPage = () => {
    const [flipped, setFlipped] = useState(false);
    const [coins, setCoins] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        if (isAnimating) return;

        setIsAnimating(true);

        if (!flipped) {
            setFlipped(true);

            setTimeout(() => {
                const newCoins = [];
                const coinCount = Math.floor(balance / 10000);

                for (let i = 0; i < coinCount; i++) {
                    const position = {
                        left: '18%',
                        top: `${220 - i * 10}%`,
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
            <CanContent />
            <CanImageContainer
                flipped={flipped}
                coins={coins}
                handleClick={handleClick}
            />
            <img src={lineUrl} className="line" alt="line" />
            <TerminateButton />
        </Container>
    );
};

export default MyCanPage;
