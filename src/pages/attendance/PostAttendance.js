import React, { useState } from 'react';
import axios from 'axios'; // axios를 import합니다
import '../../assets/PostAttendance.css';

const PostAttendance = ({ onBack }) => {
    const [message, setMessage] = useState('');
    const [buttonColor, setButtonColor] = useState('default');
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleSubmit = async () => {
        const length = message.trim().length;
        if (length >= 1 && length <= 300) {
            try {
                const response = await axios.post(
                    '/attendance/create',
                    { message },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );

                setPopupMessage(response.data);
                setButtonColor('success');
                setPopupVisible(true);
                setMessage('');

                // 버튼 색상 복원
                setTimeout(() => {
                    setButtonColor('default');
                }, 3000);
            } catch (error) {
                setButtonColor('error');
                setPopupMessage(
                    '출석 인증에 실패했습니다. 다시 시도해 주세요.',
                );
                setPopupVisible(true);

                // 버튼 색상 복원
                setTimeout(() => {
                    setButtonColor('default');
                }, 3000);
            }
        } else {
            setButtonColor('error');
            setTimeout(() => {
                alert('출석 글은 0자 이상 300자 이내로 작성해 주세요');
                setButtonColor('default');
            }, 300);
        }
    };

    // 팝업을 닫기 위한 함수
    const closePopupOnly = () => {
        setPopupVisible(false);
    };

    // 팝업 닫고 페이지 이동하는 함수
    const closePopup = () => {
        setPopupVisible(false);
        window.location.href = '/attendance/main';
    };

    return (
        <div className="container">
            <br />
            <br />
            <textarea
                className="text-area"
                placeholder="오늘의 과소비 or 절약 인증 글을 작성해주세요. (최대 300자)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                className={`submit-button ${buttonColor}`}
                onClick={handleSubmit}
            >
                출석 완료
            </button>
            <h1 className="caution">
                ※ 주의사항 <br /> 만약 인증 내용과 관련되지 않을 시 출석 인정이
                되지 않습니다. 출석 인증 관련 이상이 있을 시 고객 센터로 문의
                바랍니다.
            </h1>

            {popupVisible && (
                <div className="popup-background">
                    <div className="popup-content">
                        <div>
                            <p
                                className="popup-message"
                                dangerouslySetInnerHTML={{
                                    __html: popupMessage,
                                }}
                            />
                            <button
                                className="close-button close-popup-button"
                                onClick={closePopup} // X -> 팝업 닫고 출석부로 이동
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostAttendance;
