import React, { useState } from 'react';
import '../../assets/PostAttendance.css';

const PostAttendance = () => {
    const [message, setMessage] = useState('');
    const [buttonColor, setButtonColor] = useState('default');
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');

    const handleSubmit = () => {
        const length = message.trim().length;
        if (length >= 1 && length <= 300) {
            const response = { status: '과소비' }; // 테스트용 가상 응답

            if (response.status === '부적절') {
                setPopupMessage(
                    '작성하신 내용에<br>과소비 반성 / 절약 인증<br> 관련 내용이 없습니다.<br>다시 작성해주세요.<br><br>※ 문제 발생 시<br>고객센터 문의 바랍니다.',
                );
                setPopupVisible(true);
                setPopupType('부적절');
                setMessage('');
                setButtonColor('default');
            } else if (response.status === '과소비') {
                setButtonColor('success');
                setMessage('');
                setPopupMessage(
                    '돈 쓰는 게 취미니?💸너무 쓰지 말고, 저금도 좀 해!<br>은행에 쌓아놓은 돈으로 "노후 준비"라는 거 알아?<br>나중에 맛있는 거 먹으려면 지금 좀 아껴야 해! 😜<br><div class="popupImg"></div>',
                );
                setPopupVisible(true);
                setPopupType('과소비');

                setTimeout(() => {
                    setButtonColor('default');
                }, 3000);
            } else if (response.status === '절약') {
                setButtonColor('success');
                setMessage('');
                setPopupMessage(
                    '오, 너 진짜 대단해! 😎 커피 대신 애사비 마신 거 완전 절약 천재야! 💪 이제부터 너를 "절약의 신"이라고 부를게! 다음에도 이런 꿀팁 있으면 꼭 나한테도 알려줘~ 진짜 최고! 👏🌟<br><div class="popupImg2"></div>',
                );
                setPopupVisible(true);
                setPopupType('절약');

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

    const handleClose = () => {
        setMessage('');
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className="container">
            <div className="header-content">
                <button className="close-button" onClick={handleClose}>
                    X
                </button>
                <h1 className="title">글 쓰기</h1>
            </div>
            <div className="separator"></div>
            <textarea
                className="text-area"
                placeholder="오늘의 과소비 or 절약 인증 글을 작성해주세요. (최대 300자)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <div className="separator"></div>
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
                            {popupType === '부적절' ? (
                                <button
                                    className="popup-button"
                                    onClick={closePopup}
                                >
                                    돌아가기
                                </button>
                            ) : (
                                <button
                                    className="close-button close-popup-button"
                                    onClick={closePopup}
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
