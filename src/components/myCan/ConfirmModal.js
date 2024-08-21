import React from 'react';
import '../../assets/myCan/ConfirmModal.css';
import lineUrl from '../../assets/common/img/line.png';

const ConfirmModal = ({ onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-ask">
                    <h2>깡통을 비우시겠어요?</h2>
                    <p>전액 출금 후 연결된 계좌로 입금됩니다.</p>
                    <img src={lineUrl} />
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
                    <button className="confirm-button" onClick={onClose}>
                        확인
                    </button>
                    <button className="cancel-button" onClick={onClose}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
