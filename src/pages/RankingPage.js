import React, { useEffect, useState } from 'react';
import '../assets/friendPage/RankingPage.css';
import Container from '../components/common/Container';
import axios from 'axios';

import flexBird from '../assets/attendancePage/img/flexBird.png';
import poorBird from '../assets/attendancePage/img/poorBird.png';
import League from '../components/ranking/league';

const RankingPage = () => {
    const [rankingData, setRankingData] = useState([]);
    const [leagueKind, setLeagueKind] = useState('');
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        const rankingData = () => {
            axios
                .get('http://localhost:9070/ranking', {
                    withCredentials: true,
                })
                .then((response) => {
                    setLeagueKind(response.data.leagueKind);
                    setRankingData(response.data.rankingDTOList);
                    setUserId(response.data.rankingUserID);
                })

                .catch((error) => {
                    console.error(
                        'Error in viewAllattendance Page with:',
                        error,
                    );
                });
        };

        rankingData();
    }, []);

    return (
        <Container className="ranking-container">
            <div className="league-info">
                <div className="league-title">
                    <h2>월간 리그</h2>
                </div>
                <League league={leagueKind} endDate="2024-09-10T00:00:00" />
            </div>

            <div className="ranking-list">
                {rankingData.map((item, index) => {
                    const isPromotionZone = index == 5; // 승급존 체크
                    const isRelegationZone = index == rankingData.length - 6; // 강등존 체크

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
                                className={`ranking-item ${userId == item.rankingUserID ? 'my-rank' : ''}`}
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
                })}
            </div>
        </Container>
    );
};

export default RankingPage;
