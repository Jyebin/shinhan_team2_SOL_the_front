import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import '../../assets/myCan/ConfirmModal.css';
import lineUrl from '../../assets/common/img/line.png'; // 이미지 경로 맞게 수정

const ConfirmModal = ({ onClose, navigateTo }) => {
    const [isConfirmed, setIsConfirmed] = useState(false); // 상태 추가
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleConfirm = () => {
        setIsConfirmed(true); // 확인 버튼 클릭 시 상태 변경
        // 실제로 페이지 이동이 필요하다면 setTimeout 등을 사용해 딜레이를 줄 수 있습니다.
        setTimeout(() => {
            navigate(navigateTo); // navigateTo URL로 탐색
            onClose(); // 모달 닫기
        }, 1000); // 1초 지연
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
                                <input type="checkbox" id="continue" />
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
                                className="confirm-button"
                                onClick={handleConfirm}
                            >
                                확인
                            </button>
                            <button className="cancel-button" onClick={onClose}>
                                닫기
                            </button>
                        </>
                    ) : (
                        <button className="confirm-button" onClick={onClose}>
                            확인
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const ParentComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <button onClick={openModal}>모달 열기</button>

            {isModalVisible && (
                <ConfirmModal
                    onClose={closeModal}
                    navigateTo="/desired-path" // 탐색할 URL 경로
                />
            )}
        </div>
    );
};

export default ParentComponent;

// import React, { useState, useEffect } from 'react';
// import '../../assets/myCan/ConfirmModal.css';
// import lineUrl from '../../assets/common/img/line.png';
// import { useNavigate } from 'react-router-dom'; // useNavigate import

// const ConfirmModal = ({ onClose }) => {
//     const navigate = useNavigate();

//     const [buttonColor, setButtonColor] = useState('default');
//     const [popupVisible, setPopupVisible] = useState(false);
//     const [popupMessage, setPopupMessage] = useState('');
//     const [popupType, setPopupType] = useState('');

//     const viewAttendancePosts = () => {
//         alert('깡통을 비웠습니다.');
//         navigate('/');
//     };

//     return (
//         <div className="modal-overlay" onClick={onClose}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                 <div className="modal-ask">
//                     <h2>깡통을 비우시겠어요?</h2>
//                     <p>전액 출금 후 연결된 계좌로 입금됩니다.</p>
//                     <img src={lineUrl} />
//                     <div className="checkbox-container">
//                         <input type="checkbox" id="continue" />
//                         <label htmlFor="continue"></label>
//                         계속해서 깡통 채우기
//                     </div>
//                     <div className="modal-script">
//                         출금 후에도 깡통을 유지합니다.
//                         <br />
//                         체크하지 않으시면, 그대로 해지됩니다.
//                     </div>
//                 </div>
//                 <div className="modal-buttons">
//                     <button
//                         className="confirm-button"
//                         onClick={viewAttendancePosts}
//                     >
//                         확인
//                     </button>
//                     <button className="cancel-button" onClick={onClose}>
//                         취소
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ConfirmModal;
