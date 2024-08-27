import React, { useState, useEffect } from 'react';
import '../../assets/attendancePage/ViewAllAttendance.css';
import { Link } from 'react-router-dom';
import richBirdImage from '../../assets/attendancePage/img/richBird.png';

function ViewAllAttendance() {
    const [message, setMessage] = useState('');
    const [buttonColor, setButtonColor] = useState('default');
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');

    const [totalAttendanceDays, setTotalAttendanceDays] = useState(0); // 총 출석 일자
    const [currentDate, setCurrentDate] = useState(new Date()); // 달력 호출을 위한 현재 날짜, 기본: 오늘
    const [attendanceData, setAttendanceData] = useState([]); // 출석한 날짜 및 출석글 타입, 총 출석 일자를 계산하기 때문에 전체 데이터를 한번에 호출

    useEffect(() => {
        // // 여기서 출석 데이터 호출 API 호출
        // // dummy data
        // const dummyData = [
        //     { date: '2024-08-01', type: 'overspending' },
        //     { date: '2024-08-02', type: 'saving' },
        //     { date: '2024-08-12', type: 'overspending' },
        //     { date: '2024-08-13', type: 'saving' },
        //     { date: '2024-08-17', type: 'overspending' },
        // ];
        // setAttendanceData(dummyData); // 출석한 날짜 설정
        // setTotalAttendanceDays(dummyData.length); // 총 출석 일자 설정
        const initialDummyData = [
            { date: '2024-08-01', type: 'overspending' },
            { date: '2024-08-02', type: 'saving' },
            { date: '2024-08-12', type: 'overspending' },
            { date: '2024-08-13', type: 'saving' },
            { date: '2024-08-17', type: 'overspending' },
        ];

        // 로컬스토리지에서 추가된 데이터를 가져옴
        const storedData =
            JSON.parse(localStorage.getItem('attendanceData')) || [];

        // 더미 데이터와 로컬스토리지 데이터를 병합하여 최종 출석 데이터 생성
        const mergedData = [...initialDummyData, ...storedData];

        setAttendanceData(mergedData);
        if (mergedData.length == 11) {
            setTotalAttendanceDays(20);
        } else {
            setTotalAttendanceDays(19);
        }
    }, []);

    // 달력 생성을 위한 함수
    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
    ).getDate();
    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1,
    ).getDay();

    // 달력 생성
    const renderCalendar = () => {
        let days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(
                <div key={`empty-${i}`} className="calendar-day empty"></div>,
            );
        }
        for (let i = 1; i <= daysInMonth; i++) {
            // 한 자리 숫자일 경우 01, 02와 같이 표현되게 formatting
            const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            const attendanceInfo = attendanceData.find(
                (item) => item.date === dateString,
            );

            let attendanceClass = '';
            if (attendanceInfo) {
                attendanceClass =
                    attendanceInfo.type === 'saving'
                        ? 'attend saving'
                        : 'attend overspending';
            }
            days.push(
                // 날짜 출력, 출석을 이미 했다면 스탬프 출력
                <div
                    key={i}
                    className={`calendar-day ${attendanceClass}`}
                    onClick={
                        attendanceInfo
                            ? () => viewAttendancePosts(attendanceInfo)
                            : null
                    }
                >
                    <span>{i}</span>
                </div>,
            );
        }
        return days;
    };

    // 달력 몇 주 있는지
    const getCalendarRows = () => {
        const totalDays = firstDayOfMonth + daysInMonth;
        return Math.ceil(totalDays / 7);
    };

    // 화살표 클릭 시 몇 월인지 변경
    const changeMonth = (increment) => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(
                prevDate.getFullYear(),
                prevDate.getMonth() + increment,
                1,
            );
            return newDate;
        });
    };

    const viewAttendancePosts = (attendanceInfo) => {
        setPopupMessage(
            `오늘 나 커피 사마시는 대신에 집에서 가져온 애사비 마셨어`,
        );
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className="ViewAllAttendance">
            <br />
            <br />
            <main>
                <section className="attendance-summary">
                    <h2>
                        오늘까지 <span>{totalAttendanceDays}</span>일 출석했어요
                    </h2>
                </section>

                <section className="calendar-container">
                    <div className="calendar-navigation">
                        <button onClick={() => changeMonth(-1)}>&lt;</button>
                        <h3>
                            {currentDate.getFullYear()}.{' '}
                            {String(currentDate.getMonth() + 1).padStart(
                                2,
                                '0',
                            )}
                        </h3>
                        <button onClick={() => changeMonth(1)}>&gt;</button>
                    </div>
                    <div className={`calendar rows-${getCalendarRows()}`}>
                        <div className="calendar-header">
                            <div>일</div>
                            <div>월</div>
                            <div>화</div>
                            <div>수</div>
                            <div>목</div>
                            <div>금</div>
                            <div>토</div>
                        </div>
                        <div className="calendar-body">{renderCalendar()}</div>
                    </div>
                </section>
            </main>

            <Link
                to="http://192.168.0.63:3000/attendance/post"
                className="attendance-button"
            >
                오늘 출석체크하기
            </Link>

            <div className="attendance-info">
                · 하루에 한 번 오늘 날짜만 출석할 수 있어요.
            </div>

            {popupVisible && (
                <div className="popup-background">
                    <div className="popup-content">
                        <div className="popup-message">{popupMessage}</div>
                        <img src={richBirdImage} className="popup-image" />
                        <button className="popup-button" onClick={closePopup}>
                            닫기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ViewAllAttendance;
