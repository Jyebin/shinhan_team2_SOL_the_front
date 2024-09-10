import React, { useEffect, useState } from 'react';
import '../assets/friendPage/RankingPage.css';
import Container from '../components/common/Container';
import axios from 'axios';

import flexBird from '../assets/attendancePage/img/flexBird.png';
import poorBird from '../assets/attendancePage/img/poorBird.png';
import League from '../components/ranking/league';

const RankingPage = () => {
    const [leagueKind, setLeagueKind] = useState(null);
    const [rankingData, setRankingData] = useState(null);
    const [userId, setUserId] = useState(0);

    // 다른 리그 아이콘 클릭시, 해당 리그 정보 가져옴
    const handleLeagueChange = (newLeague) => {
        axios
            .post('http://localhost:9070/ranking/league/data', {
                league: newLeague,
                withCredentials: true,
            })
            .then((response) => {
                setLeagueKind(response.data.leagueKind);
                setRankingData(response.data.rankingDTOList);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error in viewAllattendance Page with:', error);
            });
    };

    // 다른 리그 아이콘 클릭시, 해당 리그 정보 가져옴
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
                    console.log(response.data);
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

    if (!leagueKind || !rankingData) {
        return <Container className="ranking-container"></Container>;
    }

    return (
        <Container className="ranking-container">
            <div className="league-info">
                <div className="league-title">
                    <h2>월간 리그</h2>
                </div>
                <League
                    initialLeague={leagueKind}
                    endDate="2024-09-15T00:00:00"
                    onLeagueChange={handleLeagueChange}
                />
            </div>

            <div className="ranking-list">
                {rankingData.map((item, index) => {
                    const isPromotionZone = index === 5;
                    const isRelegationZone =
                        leagueKind === 'dia'
                            ? index === rankingData.length - 11
                            : index === rankingData.length - 6;

                    return (
                        <React.Fragment key={index}>
                            {isPromotionZone && leagueKind !== 'dia' && (
                                <div className="zone-status">
                                    <hr className="promotion-zone" />
                                    <p className="promotion-text">
                                        ⬆ 승급존 ⬆
                                    </p>
                                    <hr className="promotion-zone" />
                                </div>
                            )}

                            <div
                                className={`ranking-item ${item.rankingUserNum === userId ? 'my-rank' : ''}`}
                            >
                                <span className="rank-number">
                                    {item.rankingNum}
                                </span>
                                <img
                                    src={
                                        leagueKind !== 'dia'
                                            ? item.rankingNum <= 5
                                                ? flexBird
                                                : poorBird
                                            : item.rankingNum <= 10
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
