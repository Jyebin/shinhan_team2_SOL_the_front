import React from 'react';
import '../../assets/attendancePage/AttendanceView.css';

function AttendanceView({ attendanceInfo, onClose }) {
    if (!attendanceInfo) return null;

    // 타입에 따른 클래스 설정
    const getClassForType = (type) => {
        switch (type) {
            case 'overspending':
                return 'overspending';
            case 'saving':
                return 'saving';
            default:
                return '';
        }
    };

    return (
        <div className="attendance-detail">
            <div className={`attendance-detail-content `}>
                <div
                    className={`attendance-container ${getClassForType(attendanceInfo.type)}`}
                >
                    <div className="attendance-into">
                        <h2>{attendanceInfo.date}</h2>
                        <p className="attendance-info-type">
                            {attendanceInfo.type === 'overspending'
                                ? '과소비'
                                : '절약 인증'}
                        </p>
                    </div>
                    <div className="attendance-image" />
                </div>
                <hr className="divide-line" />
                <div className="attendance-info-content">
                    {attendanceInfo.content}
                </div>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
}

export default AttendanceView;
