import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/PostAttendance.css';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const PostAttendance = ({ onBack }) => {
    const [message, setMessage] = useState('');
    const [buttonColor, setButtonColor] = useState('default');
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        const length = message.trim().length;
        console.log(message);
        if (length >= 1 && length <= 300) {
            setIsLoading(true);
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

                setTimeout(() => {
                    setButtonColor('default');
                }, 3000);
            } catch (error) {
                console.error(error);
                setButtonColor('error');
                setPopupMessage(
                    '출석 인증에 실패했습니다. 다시 시도해 주세요.',
                );
                setPopupVisible(true);

                setTimeout(() => {
                    setButtonColor('default');
                }, 3000);
            } finally {
                setIsLoading(false);
            }
        } else {
            setButtonColor('error');
            setTimeout(() => {
                alert('출석 글은 0자 이상 300자 이내로 작성해 주세요');
                setButtonColor('default');
            }, 300);
        }
    };

    const closePopup = () => {
        setPopupVisible(false);
        window.location.href = '/attendance/main';
    };

    return (
        <div className="container">
            {isLoading && <LoadingSpinner />}
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
                                onClick={closePopup}
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
