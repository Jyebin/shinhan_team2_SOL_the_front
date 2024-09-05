import React, { useEffect, useState } from 'react';
import '../assets/friendPage/RankingPage.css';
import Container from '../components/common/Container';
import axios from 'axios';

import flexBird from '../assets/attendancePage/img/flexBird.png';
import poorBird from '../assets/attendancePage/img/poorBird.png';
import League from '../components/ranking/league';

// 더미 데이터 생성

const RankingPage = () => {
    const [rankingData, setRankingData] = useState([]);

    useEffect(() => {
        const fetchRankingData = async () => {
            try {
                const response = await axios.get('/api/ranking'); // 백엔드 API 엔드포인트
                setRankingData(response.data); // 응답 데이터 설정
            } catch (error) {
                console.error('데이터 요청 에러:', error);
            }
        };

        fetchRankingData();
    }, []);

    return (
        <Container className="ranking-container">
            <div className="league-info">
                <div className="league-title">
                    <h2>월간 리그</h2>
                </div>
                <League league="platinum" endDate="2024-09-10T00:00:00" />
            </div>

            <div className="ranking-list">
                {rankingData.map((item, index) => (
                    <div className="ranking-item" key={index}>
                        <span className="rank-number">{item.rank}</span>
                        <img
                            src={item.avatar}
                            alt={item.name}
                            className="ranking-avatar"
                        />
                        <span className="ranking-name">{item.name}</span>

                        <span className="ranking-status">{item.status}</span>
                        {!item.participating && (
                            <button className="wake-up-btn">깨우기</button>
                        )}
                        {item.participating && item.points && (
                            <span className="ranking-points">
                                {item.points}
                            </span>
                        )}
                    </div>
                ))}

                <div className="not-participating-title">
                    아직 리그에 참여하지 않은 친구
                </div>
            </div>
        </Container>
    );
};

export default RankingPage;
