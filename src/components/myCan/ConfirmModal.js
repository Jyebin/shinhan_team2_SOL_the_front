import React from 'react';
import '../../assets/myCan/ConfirmModal.css';

const ConfirmModal = ({ onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>깡통을 비우시겠어요?</h2>
                <p>전액 출금 후 연결된 계좌로 입금됩니다.</p>
                <div className="checkbox-container">
                    <input type="checkbox" id="continue" />
                    <label htmlFor="continue">계속해서 깡통 채우기</label>
                </div>
                <p>
                    출금 후에도 깡통을 유지합니다. 체크하지 않으시면, 그대로
                    해지됩니다.
                </p>
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
