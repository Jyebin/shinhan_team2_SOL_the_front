import React, { useEffect, useState } from 'react';
import '../assets/friendPage/RankingPage.css';
import Container from '../components/common/Container';
// import axios from 'axios';

import flexBird from '../assets/attendancePage/img/flexBird.png';
import poorBird from '../assets/attendancePage/img/poorBird.png';
import League from '../components/ranking/league';

const RankingPage = () => {
    const [leagueKind, setLeagueKind] = useState('bronze');
    const [rankingData, setRankingData] = useState([]);
    // const [userId, setUserId] = useState(0);
    const dummyData = {
        bronze: [
            {
                name: '박민준',
                monthlyAttendance: 20,
                totalAttendance: 150,
                rankLeague: 'Bronze',
            },
            {
                name: '김다윤',
                monthlyAttendance: 19,
                totalAttendance: 145,
                rankLeague: 'Bronze',
            },
            {
                name: '홍길동',
                monthlyAttendance: 18,
                totalAttendance: 140,
                rankLeague: 'Bronze',
            },
            {
                name: '최서준',
                monthlyAttendance: 17,
                totalAttendance: 130,
                rankLeague: 'Bronze',
            },
            {
                name: '하소영',
                monthlyAttendance: 17,
                totalAttendance: 85,
                rankLeague: 'Bronze',
            },
            {
                name: '백지호',
                monthlyAttendance: 16,
                totalAttendance: 125,
                rankLeague: 'Bronze',
            },
            {
                name: '조수호',
                monthlyAttendance: 14,
                totalAttendance: 110,
                rankLeague: 'Bronze',
            },
            {
                name: '한민재',
                monthlyAttendance: 14,
                totalAttendance: 110,
                rankLeague: 'Bronze',
            },
            {
                name: '김철수',
                monthlyAttendance: 15,
                totalAttendance: 120,
                rankLeague: 'Bronze',
            },
            {
                name: '장민서',
                monthlyAttendance: 13,
                totalAttendance: 100,
                rankLeague: 'Bronze',
            },
            {
                name: '정재민',
                monthlyAttendance: 13,
                totalAttendance: 105,
                rankLeague: 'Bronze',
            },
            {
                name: '이영희',
                monthlyAttendance: 12,
                totalAttendance: 90,
                rankLeague: 'Bronze',
            },
            {
                name: '임지혁',
                monthlyAttendance: 12,
                totalAttendance: 90,
                rankLeague: 'Bronze',
            },
            {
                name: '이서준',
                monthlyAttendance: 11,
                totalAttendance: 95,
                rankLeague: 'Bronze',
            },

            {
                name: '최유빈',
                monthlyAttendance: 10,
                totalAttendance: 85,
                rankLeague: 'Bronze',
            },
            {
                name: '서준혁',
                monthlyAttendance: 9,
                totalAttendance: 80,
                rankLeague: 'Bronze',
            },
            {
                name: '최수빈',
                monthlyAttendance: 8,
                totalAttendance: 75,
                rankLeague: 'Bronze',
            },
            {
                name: '김서현',
                monthlyAttendance: 8,
                totalAttendance: 75,
                rankLeague: 'Bronze',
            },
            {
                name: '강지안',
                monthlyAttendance: 9,
                totalAttendance: 85,
                rankLeague: 'Bronze',
            },
        ],
        silver: [
            {
                name: '김민수',
                monthlyAttendance: 25,
                totalAttendance: 200,
                rankLeague: 'Silver',
            },
            {
                name: '조연수',
                monthlyAttendance: 24,
                totalAttendance: 200,
                rankLeague: 'Silver',
            },
            {
                name: '백영준',
                monthlyAttendance: 25,
                totalAttendance: 210,
                rankLeague: 'Silver',
            },
            {
                name: '김태양',
                monthlyAttendance: 23,
                totalAttendance: 200,
                rankLeague: 'Silver',
            },
            {
                name: '정다윤',
                monthlyAttendance: 23,
                totalAttendance: 200,
                rankLeague: 'Silver',
            },
            {
                name: '홍민지',
                monthlyAttendance: 23,
                totalAttendance: 185,
                rankLeague: 'Silver',
            },
            {
                name: '이수민',
                monthlyAttendance: 22,
                totalAttendance: 190,
                rankLeague: 'Silver',
            },
            {
                name: '강태호',
                monthlyAttendance: 22,
                totalAttendance: 195,
                rankLeague: 'Silver',
            },
            {
                name: '임주희',
                monthlyAttendance: 21,
                totalAttendance: 190,
                rankLeague: 'Silver',
            },
            {
                name: '서지우',
                monthlyAttendance: 21,
                totalAttendance: 175,
                rankLeague: 'Silver',
            },
            {
                name: '이하준',
                monthlyAttendance: 20,
                totalAttendance: 180,
                rankLeague: 'Silver',
            },
            {
                name: '최준영',
                monthlyAttendance: 20,
                totalAttendance: 180,
                rankLeague: 'Silver',
            },
            {
                name: '장하늘',
                monthlyAttendance: 19,
                totalAttendance: 165,
                rankLeague: 'Silver',
            },
            {
                name: '박혜민',
                monthlyAttendance: 19,
                totalAttendance: 170,
                rankLeague: 'Silver',
            },
            {
                name: '최정우',
                monthlyAttendance: 19,
                totalAttendance: 175,
                rankLeague: 'Silver',
            },
            {
                name: '이시우',
                monthlyAttendance: 20,
                totalAttendance: 170,
                rankLeague: 'Silver',
            },
            {
                name: '최유진',
                monthlyAttendance: 22,
                totalAttendance: 190,
                rankLeague: 'Silver',
            },
            {
                name: '박예은',
                monthlyAttendance: 18,
                totalAttendance: 160,
                rankLeague: 'Silver',
            },
            {
                name: '정우성',
                monthlyAttendance: 18,
                totalAttendance: 170,
                rankLeague: 'Silver',
            },
            {
                name: '한지민',
                monthlyAttendance: 24,
                totalAttendance: 195,
                rankLeague: 'Silver',
            },
            {
                name: '백수현',
                monthlyAttendance: 24,
                totalAttendance: 200,
                rankLeague: 'Silver',
            },
            {
                name: '조하윤',
                monthlyAttendance: 25,
                totalAttendance: 210,
                rankLeague: 'Silver',
            },
            {
                name: '최준영',
                monthlyAttendance: 20,
                totalAttendance: 180,
                rankLeague: 'Silver',
            },
        ],
        gold: [
            {
                name: '홍지우',
                monthlyAttendance: 30,
                totalAttendance: 250,
                rankLeague: 'Gold',
            },
            {
                name: '임지민',
                monthlyAttendance: 30,
                totalAttendance: 250,
                rankLeague: 'Gold',
            },
            {
                name: '박지우',
                monthlyAttendance: 30,
                totalAttendance: 250,
                rankLeague: 'Gold',
            },
            {
                name: '김도훈',
                monthlyAttendance: 28,
                totalAttendance: 240,
                rankLeague: 'Gold',
            },
            {
                name: '서민혁',
                monthlyAttendance: 28,
                totalAttendance: 240,
                rankLeague: 'Gold',
            },
            {
                name: '강지수',
                monthlyAttendance: 28,
                totalAttendance: 240,
                rankLeague: 'Gold',
            },
            {
                name: '최수민',
                monthlyAttendance: 28,
                totalAttendance: 235,
                rankLeague: 'Gold',
            },
            {
                name: '정은서',
                monthlyAttendance: 28,
                totalAttendance: 235,
                rankLeague: 'Gold',
            },
            {
                name: '이예은',
                monthlyAttendance: 29,
                totalAttendance: 230,
                rankLeague: 'Gold',
            },
            {
                name: '장다은',
                monthlyAttendance: 29,
                totalAttendance: 230,
                rankLeague: 'Gold',
            },
            {
                name: '조현서',
                monthlyAttendance: 27,
                totalAttendance: 225,
                rankLeague: 'Gold',
            },
            {
                name: '최윤서',
                monthlyAttendance: 27,
                totalAttendance: 235,
                rankLeague: 'Gold',
            },
            {
                name: '백하준',
                monthlyAttendance: 26,
                totalAttendance: 220,
                rankLeague: 'Gold',
            },
            {
                name: '이민준',
                monthlyAttendance: 26,
                totalAttendance: 220,
                rankLeague: 'Gold',
            },
            {
                name: '박준영',
                monthlyAttendance: 26,
                totalAttendance: 220,
                rankLeague: 'Gold',
            },
            {
                name: '정태희',
                monthlyAttendance: 25,
                totalAttendance: 210,
                rankLeague: 'Gold',
            },
            {
                name: '최다인',
                monthlyAttendance: 25,
                totalAttendance: 210,
                rankLeague: 'Gold',
            },
            {
                name: '김현우',
                monthlyAttendance: 27,
                totalAttendance: 235,
                rankLeague: 'Gold',
            },
            {
                name: '이민수',
                monthlyAttendance: 27,
                totalAttendance: 220,
                rankLeague: 'Gold',
            },
            {
                name: '강지수',
                monthlyAttendance: 28,
                totalAttendance: 240,
                rankLeague: 'Gold',
            },
        ],

        platinum: [
            {
                name: '김태현',
                monthlyAttendance: 31,
                totalAttendance: 300,
                rankLeague: 'Platinum',
            },
            {
                name: '최하은',
                monthlyAttendance: 31,
                totalAttendance: 310,
                rankLeague: 'Platinum',
            },
            {
                name: '홍다온',
                monthlyAttendance: 31,
                totalAttendance: 300,
                rankLeague: 'Platinum',
            },
            {
                name: '백현우',
                monthlyAttendance: 31,
                totalAttendance: 305,
                rankLeague: 'Platinum',
            },
            {
                name: '김주원',
                monthlyAttendance: 31,
                totalAttendance: 310,
                rankLeague: 'Platinum',
            },
            {
                name: '최혜윤',
                monthlyAttendance: 31,
                totalAttendance: 310,
                rankLeague: 'Platinum',
            },
            {
                name: '김다영',
                monthlyAttendance: 31,
                totalAttendance: 305,
                rankLeague: 'Platinum',
            },
            {
                name: '최성민',
                monthlyAttendance: 31,
                totalAttendance: 300,
                rankLeague: 'Platinum',
            },
            {
                name: '이서연',
                monthlyAttendance: 30,
                totalAttendance: 290,
                rankLeague: 'Platinum',
            },
            {
                name: '정지훈',
                monthlyAttendance: 30,
                totalAttendance: 295,
                rankLeague: 'Platinum',
            },
            {
                name: '조은우',
                monthlyAttendance: 30,
                totalAttendance: 290,
                rankLeague: 'Platinum',
            },
            {
                name: '임예준',
                monthlyAttendance: 30,
                totalAttendance: 295,
                rankLeague: 'Platinum',
            },
            {
                name: '이민지',
                monthlyAttendance: 30,
                totalAttendance: 290,
                rankLeague: 'Platinum',
            },
            {
                name: '한동훈',
                monthlyAttendance: 30,
                totalAttendance: 295,
                rankLeague: 'Platinum',
            },
            {
                name: '조민지',
                monthlyAttendance: 30,
                totalAttendance: 295,
                rankLeague: 'Platinum',
            },
            {
                name: '서윤호',
                monthlyAttendance: 28,
                totalAttendance: 275,
                rankLeague: 'Platinum',
            },
            {
                name: '장예슬',
                monthlyAttendance: 29,
                totalAttendance: 280,
                rankLeague: 'Platinum',
            },
            {
                name: '강예린',
                monthlyAttendance: 29,
                totalAttendance: 280,
                rankLeague: 'Platinum',
            },
            {
                name: '박지성',
                monthlyAttendance: 29,
                totalAttendance: 280,
                rankLeague: 'Platinum',
            },
            {
                name: '백승현',
                monthlyAttendance: 29,
                totalAttendance: 285,
                rankLeague: 'Platinum',
            },
        ],
        dia: [
            {
                name: '김현빈',
                monthlyAttendance: 31,
                totalAttendance: 400,
                rankLeague: 'Diamond',
            },
            {
                name: '홍예은',
                monthlyAttendance: 31,
                totalAttendance: 400,
                rankLeague: 'Diamond',
            },
            {
                name: '백태민',
                monthlyAttendance: 31,
                totalAttendance: 400,
                rankLeague: 'Diamond',
            },
            {
                name: '김지훈',
                monthlyAttendance: 31,
                totalAttendance: 400,
                rankLeague: 'Diamond',
            },
            {
                name: '김다온',
                monthlyAttendance: 31,
                totalAttendance: 400,
                rankLeague: 'Diamond',
            },
            {
                name: '강서준',
                monthlyAttendance: 31,
                totalAttendance: 395,
                rankLeague: 'Diamond',
            },
            {
                name: '이승현',
                monthlyAttendance: 31,
                totalAttendance: 395,
                rankLeague: 'Diamond',
            },
            {
                name: '이혜민',
                monthlyAttendance: 31,
                totalAttendance: 395,
                rankLeague: 'Diamond',
            },
            {
                name: '최준혁',
                monthlyAttendance: 31,
                totalAttendance: 395,
                rankLeague: 'Diamond',
            },
            {
                name: '정태민',
                monthlyAttendance: 31,
                totalAttendance: 385,
                rankLeague: 'Diamond',
            },
            {
                name: '정성윤',
                monthlyAttendance: 31,
                totalAttendance: 385,
                rankLeague: 'Diamond',
            },
            {
                name: '최다현',
                monthlyAttendance: 31,
                totalAttendance: 390,
                rankLeague: 'Diamond',
            },
            {
                name: '최민서',
                monthlyAttendance: 31,
                totalAttendance: 390,
                rankLeague: 'Diamond',
            },
            {
                name: '장준희',
                monthlyAttendance: 31,
                totalAttendance: 390,
                rankLeague: 'Diamond',
            },
            {
                name: '서수호',
                monthlyAttendance: 30,
                totalAttendance: 380,
                rankLeague: 'Diamond',
            },
            {
                name: '임승현',
                monthlyAttendance: 30,
                totalAttendance: 380,
                rankLeague: 'Diamond',
            },
            {
                name: '조혜진',
                monthlyAttendance: 30,
                totalAttendance: 375,
                rankLeague: 'Diamond',
            },
            {
                name: '박정훈',
                monthlyAttendance: 30,
                totalAttendance: 375,
                rankLeague: 'Diamond',
            },
            {
                name: '박지후',
                monthlyAttendance: 30,
                totalAttendance: 375,
                rankLeague: 'Diamond',
            },
            {
                name: '조윤서',
                monthlyAttendance: 30,
                totalAttendance: 380,
                rankLeague: 'Diamond',
            },
        ],
    };

    useEffect(() => {
        // 선택된 리그에 따라 데이터 필터링
        const filteredData = dummyData[leagueKind].map((item, index) => ({
            ...item,
            rankingNum: index + 1,
            rankingUserName: item.name,
            rankingScore: item.monthlyAttendance,
            userTotalScore: item.totalAttendance,
            rankingUserID: index, // 임시로 인덱스를 ID로 사용
        }));
        setRankingData(filteredData);
    }, [leagueKind]);

    const handleLeagueChange = (newLeague) => {
        setLeagueKind(newLeague);
    };

    useEffect(() => {
        // const rankingData = () => {
        //     axios
        //         .get('http://localhost:9070/ranking', {
        //             withCredentials: true,
        //         })
        //         .then((response) => {
        //             setLeagueKind(response.data.leagueKind);
        //             setRankingData(response.data.rankingDTOList);
        //             setUserId(response.data.rankingUserID);
        //         })
        //         .catch((error) => {
        //             console.error(
        //                 'Error in viewAllattendance Page with:',
        //                 error,
        //             );
        //         });
        // };
        // rankingData();
    }, []);

    return (
        <Container className="ranking-container">
            <div className="league-info">
                <div className="league-title">
                    <h2>월간 리그</h2>
                </div>
                <League
                    league={'bronze'}
                    endDate="2024-09-15T00:00:00"
                    onLeagueChange={handleLeagueChange}
                />
            </div>

            <div className="ranking-list">
                {/* {rankingData.map((item, index) => {
                    const isPromotionZone = index === 5; // 승급존 체크
                    const isRelegationZone = index === rankingData.length - 6; // 강등존 체크

                    return (
                        <>
                            {isPromotionZone && (
                                <div className="zone-status">
                                    <hr className="promotion-zone" />
                                    <p className="promotion-text">
                                        ⬆ 승급존 ⬆
                                    </p>
                                    <hr className="promotion-zone" />
                                </div>
                            )}
                            {console.log(item)}

                            <div
                                className={`ranking-item ${userId === item.rankingUserID ? 'my-rank' : ''}`}
                                key={index}
                            >
                                <span className="rank-number">
                                    {item.rankingNum}
                                </span>
                                <img
                                    src={
                                        item.rankingNum <= 5
                                            ? flexBird
                                            : poorBird
                                    }
                                    className="ranking-avatar"
                                />
                                <span className="ranking-name">
                                    {item.rankingUserName}
                                </span>
                                <div className="score-info">
                                    <span className="ranking-score">
                                        {item.rankingScore} PT
                                    </span>

                                    <span className="ranking-total-score">
                                        {item.userTotalScore} PT
                                    </span>
                                </div>
                            </div>
                            {isRelegationZone && (
                                <div className="zone-status">
                                    <hr className="relegation-zone" />
                                    <p className="relegation-text">
                                        ⬇ 강등존 ⬇
                                    </p>
                                    <hr className="relegation-zone" />
                                </div>
                            )}
                        </>
                    );
                })} */}
                {rankingData.map((item, index) => {
                    const isPromotionZone = index === 5;
                    const isRelegationZone = index === rankingData.length - 6;

                    return (
                        <React.Fragment key={index}>
                            {isPromotionZone && (
                                <div className="zone-status">
                                    <hr className="promotion-zone" />
                                    <p className="promotion-text">
                                        ⬆ 승급존 ⬆
                                    </p>
                                    <hr className="promotion-zone" />
                                </div>
                            )}

                            <div
                                className={`ranking-item ${item.name === '하소영' ? 'my-rank' : ''}`}
                            >
                                <span className="rank-number">
                                    {item.rankingNum}
                                </span>
                                <img
                                    src={
                                        item.rankingNum <= 5
                                            ? flexBird
                                            : poorBird
                                    }
                                    className="ranking-avatar"
                                    alt="Ranking avatar"
                                />
                                <span className="ranking-name">
                                    {item.rankingUserName}
                                </span>
                                <div className="score-info">
                                    <span className="ranking-score">
                                        {item.rankingScore} 일
                                    </span>
                                    <span className="ranking-total-score">
                                        {item.userTotalScore} 일
                                    </span>
                                </div>
                            </div>

                            {isRelegationZone && (
                                <div className="zone-status">
                                    <hr className="relegation-zone" />
                                    <p className="relegation-text">
                                        ⬇ 강등존 ⬇
                                    </p>
                                    <hr className="relegation-zone" />
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </Container>
    );
};

export default RankingPage;
