import React from 'react';
import '../../assets/friendPage/AddFriendsModal.css'; // 스타일은 따로 관리

const AddFriendsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="find-user-modal-overlay">
            <div className="find-user-modal-content">
                <div className="find-user-modal-title">
                    <h2 className="find-user-modal-title">친구 찾기</h2>
                    <button
                        className="find-user-modal-close-btn"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>
                <div className="modal-options">
                    <div className="modal-option">
                        <span>회원 코드로 검색하기</span>
                    </div>
                    <div className="modal-option">
                        <span>내 프로필 공유하기</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFriendsModal;
