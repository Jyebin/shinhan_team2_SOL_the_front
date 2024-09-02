import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/myCan/ConfirmModal.css';
import lineUrl from '../../assets/common/img/line.png';
import axios from 'axios';

const ConfirmModal = ({ onClose, accountID }) => {
    const [isConfirmed, setIsConfirmed] = useState(false); // 확인 상태 추가
    const [isContinueChecked, setIsContinueChecked] = useState(false); // 체크박스 상태 추가
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleConfirm = async (id) => {
        setIsConfirmed(true); // 확인 버튼 클릭 시 상태 변경
        let status;
        // 깡통 해지
        if (isContinueChecked) {
            // 1. 체크 표시가 되어 있을 경우
            status = 'terminateChecked';
        } else {
            // 2. 체크 표시가 안 되어 있을 경우
            status = 'terminateUnChecked';
        }

        try {
            const res = await axios.post(
                'http://localhost:9070/api/account/can/manage',
                {
                    accountID: id,
                    status: status,
                },
            );

            const redirectUrl = res.data.redirectUrl;

            // 페이지 이동
            setTimeout(() => {
                navigate(redirectUrl); // 서버로부터 받은 URL로 탐색
                onClose(); // 모달 닫기
            }, 1000); // 1초 지연
        } catch (error) {
            console.error('Failed to fetch', error);
        }
    };

    const handleCheckboxChange = () => {
        setIsContinueChecked(!isContinueChecked); // 체크박스 상태 토글
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-ask">
                    {isConfirmed ? (
                        <>
                            <h2>깡통을 비웠습니다.</h2>
                        </>
                    ) : (
                        <>
                            <h2>깡통을 비우시겠어요?</h2>
                            <p>전액 출금 후 연결된 계좌로 입금됩니다.</p>
                            <img src={lineUrl} alt="Line" />
                            <div className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="continue"
                                    onChange={handleCheckboxChange} // 체크박스 상태 변경 핸들러
                                />
                                <label htmlFor="continue"></label>
                                계속해서 깡통 채우기
                            </div>
                            <div className="modal-script">
                                출금 후에도 깡통을 유지합니다.
                                <br />
                                체크하지 않으시면, 그대로 해지됩니다.
                            </div>
                        </>
                    )}
                </div>
                <div className="modal-buttons">
                    {!isConfirmed ? (
                        <>
                            <button
                                className="can-confirm-button"
                                onClick={() => handleConfirm(accountID)}
                            >
                                확인
                            </button>
                            <button
                                className="can-cancel-button"
                                onClick={onClose}
                            >
                                닫기
                            </button>
                        </>
                    ) : (
                        <button
                            className="can-confirm-button"
                            onClick={onClose}
                        >
                            확인
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
