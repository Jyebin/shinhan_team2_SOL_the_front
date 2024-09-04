import React from 'react';
import '../assets/friendPage/RankingPage.css';
import Container from '../components/common/Container';

import flexBird from '../assets/attendancePage/img/flexBird.png';
import poorBird from '../assets/attendancePage/img/poorBird.png';

// 더미 데이터 생성
const rankingData = [
    {
        rank: 1,
        name: '김철수',
        points: '1000 PT',
        status: '12시간 전',
        avatar: flexBird,
        participating: true,
    },
    {
        rank: 2,
        name: '홍길동',
        points: null,
        status: '2일째 자는 중',
        avatar: flexBird,
        participating: false,
    },
    {
        rank: 3,
        name: '라따뚜이',
        points: null,
        status: '리그 미참여',
        avatar: poorBird,
        participating: false,
    },
    {
        rank: 4,
        name: '불쌍한나',
        points: null,
        status: '9일째 자는 중',
        avatar: poorBird,
        participating: false,
    },
    {
        rank: 5,
        name: '기타맨',
        points: null,
        status: '리그 미참여',
        avatar: poorBird,
        participating: false,
    },
];

const RankingPage = () => {
    return (
        <Container
            style={{
                backgroundColor: '#f3f6fb',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <div className="league-info">
                <div className="league-title">
                    <h2>친구 리그</h2>
                    <span className="remaining-time">남은 시간: 6일 2분</span>
                </div>
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
                        {item.points && (
                            <span className="ranking-points">
                                {item.points}
                            </span>
                        )}
                        <span className="ranking-status">{item.status}</span>
                        {!item.participating && (
                            <button className="wake-up-btn">깨우기</button>
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
