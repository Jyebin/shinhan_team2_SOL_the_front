import React from 'react';
import canUrl from '../../assets/common/img/can_img.png';
import coinUrl from '../../assets/common/img/coin_img.png';
import '../../assets/myCan/CanImageContainer.css';

const CanImageContainer = ({ flipped, coins, handleClick }) => {
    return (
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
                    <img src={coinUrl} className="coin" alt={`coin-${index}`} />
                    <div
                        className="plus-one"
                        style={{
                            top: `${200 - index * 10}%`,
                            opacity: position.displayNumber === false ? 0 : 1,
                        }}
                    >
                        +{index + 1}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CanImageContainer;
