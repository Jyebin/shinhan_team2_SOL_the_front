import React, { useState, useEffect } from 'react';
import '../../assets/attendancePage/ViewAllAttendance.css';
import { Link } from 'react-router-dom';

function ViewAllAttendance() {
    const [totalAttendanceDays, setTotalAttendanceDays] = useState(0); // 총 출석 일자
    const [currentDate, setCurrentDate] = useState(new Date()); // 달력 호출을 위한 현재 날짜, 기본: 오늘
    const [attendanceData, setAttendanceData] = useState([]); // 출석한 날짜 및 출석글 타입, 총 출석 일자를 계산하기 때문에 전체 데이터를 한번에 호출

    useEffect(() => {
        // 여기서 출석 데이터 호출 API 호출
        // dummy data
        const dummyData = [
            { date: '2024-08-01', type: 'overspending' },
            { date: '2024-08-02', type: 'saving' },
            { date: '2024-08-12', type: 'overspending' },
            { date: '2024-08-13', type: 'saving' },
            { date: '2024-08-17', type: 'overspending' },
        ];
        setAttendanceData(dummyData); // 출석한 날짜 설정
        setTotalAttendanceDays(dummyData.length); // 총 출석 일자 설정
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
                // 출석을 이미 했다면 스탬프 출력
                <div key={i} className={`calendar-day ${attendanceClass}`}>
                    <span>{i}</span>
                    {attendanceInfo && (
                        <div className={`stamp ${attendanceInfo.type}`}></div>
                    )}
                </div>,
            );
        }
        return days;
    };

    const getCalendarRows = () => {
        const totalDays = firstDayOfMonth + daysInMonth;
        return Math.ceil(totalDays / 7);
    };

    const handleAttendanceCheck = () => {
        // 출석 체크 API 호출
        alert('오늘 출석이 완료되었습니다!');
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

    return (
        <div className="ViewAllAttendance">
            <header>
                {/* 버튼 클릭 시 메인화면으로 연결 */}
                <button>&lt;</button>
                <h1>출석부</h1>
            </header>

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
                to="http://localhost:3000/attendance/post"
                className="btn attendance-button"
            >
                오늘 출석체크하기
            </Link>

            <div className="attendance-info">
                · 하루에 한 번 오늘 날짜만 출석할 수 있어요.
            </div>
        </div>
    );
}

export default ViewAllAttendance;
