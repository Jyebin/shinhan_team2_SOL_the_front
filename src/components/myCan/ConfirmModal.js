import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/myCan/ConfirmModal.css';
import lineUrl from '../../assets/common/img/line.png';

const ConfirmModal = ({ onClose }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const navigate = useNavigate();

    const handleInitialConfirm = () => {
        setIsConfirmed(true);
    };

    const handleFinalConfirm = () => {
        navigate('/');
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {isConfirmed ? (
                    <>
                        <div className="confirmation-popup">
                            깡통을 비웠습니다
                        </div>
                        <button
                            className="confirm-button"
                            onClick={handleFinalConfirm}
                        >
                            확인
                        </button>
                    </>
                ) : (
                    <>
                        <div className="modal-ask">
                            <h2>깡통을 비우시겠어요?</h2>
                            <p>전액 출금 후 연결된 계좌로 입금됩니다.</p>
                            <img src={lineUrl} alt="line" />
                            <div className="checkbox-container">
                                <input type="checkbox" id="continue" />
                                <label htmlFor="continue"></label>
                                계속해서 깡통 채우기
                            </div>
                            <div className="modal-script">
                                출금 후에도 깡통을 유지합니다.
                                <br />
                                체크하지 않으시면, 그대로 해지됩니다.
                            </div>
                        </div>
                        <div className="modal-buttons">
                            <button
                                className="confirm-button"
                                onClick={handleInitialConfirm}
                            >
                                확인
                            </button>
                            <button className="cancel-button" onClick={onClose}>
                                취소
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ConfirmModal;
