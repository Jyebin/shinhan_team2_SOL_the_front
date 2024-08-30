import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/PostAttendance.css';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const PostAttendance = ({ onBack }) => {
    const [message, setMessage] = useState('');
    const [buttonColor, setButtonColor] = useState('default');
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState(''); // popupType 상태 추가
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        const length = message.trim().length;
        if (length >= 1 && length <= 300) {
            try {
                setIsLoading(true);

                const response = await axios.post(
                    'http://localhost:9070/attendance/create',
                    {
                        message: message,
                    },
                );
                const [status, content] = response.data;

                if (status === '판단안됨') {
                    setPopupMessage(content);
                    setPopupVisible(true);
                    setPopupType('판단안됨'); // popupType 설정
                    setMessage('');
                    setButtonColor('default');
                } else if (status === '과소비') {
                    setButtonColor('success');
                    setMessage('');
                    setPopupMessage(content);
                    setPopupVisible(true);
                    setPopupType('과소비'); // popupType 설정

                    setTimeout(() => {
                        setButtonColor('default');
                    }, 3000);
                } else if (status === '절약') {
                    setButtonColor('success');
                    setMessage('');
                    setPopupMessage(content);
                    setPopupVisible(true);
                    setPopupType('절약'); // popupType 설정

                    setTimeout(() => {
                        setButtonColor('default');
                    }, 20000);
                }
                setIsLoading(false);
            } catch (error) {
                alert('오류가 발생했습니다. 다시 시도해 주세요.');
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

    const closePopupOnly = () => {
        setPopupVisible(false);
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
                            {popupType === '판단안됨' ? (
                                <button
                                    className="popup-button"
                                    onClick={closePopupOnly} // 돌아가기 -> 팝업만 닫음
                                >
                                    돌아가기
                                </button>
                            ) : (
                                <button
                                    className="close-button close-popup-button"
                                    onClick={closePopup} // X -> 팝업 닫고 출석부로 이동
                                >
                                    X
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostAttendance;
