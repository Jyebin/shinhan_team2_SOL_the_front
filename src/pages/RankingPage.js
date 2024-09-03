import React from 'react';
import '../assets/friendPage/RankingPage.css';
import Container from '../components/common/Container';

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
                <div className="ranking-item">
                    <span className="rank-number">1</span>
                    <img
                        src="/assets/codro.png"
                        alt="Codro"
                        className="ranking-avatar"
                    />
                    <span className="ranking-name">코드로</span>
                    <span className="ranking-points">1000 PT</span>
                    <span className="ranking-status">12시간 전</span>
                </div>

                <div className="not-participating-title">
                    아직 리그에 참여하지 않은 친구
                </div>

                <div className="ranking-item">
                    <span className="rank-number">-</span>
                    <img
                        src="/assets/epop.png"
                        alt="ePop"
                        className="ranking-avatar"
                    />
                    <span className="ranking-name">ePop</span>
                    <span className="ranking-status">2일째 자는 중</span>
                    <button className="wake-up-btn">깨우기</button>
                </div>

                <div className="ranking-item">
                    <span className="rank-number">-</span>
                    <img
                        src="/assets/raddatty.png"
                        alt="Raddatty"
                        className="ranking-avatar"
                    />
                    <span className="ranking-name">라따뚜이</span>
                    <span className="ranking-status">리그 미참여</span>
                </div>

                <div className="ranking-item">
                    <span className="rank-number">-</span>
                    <img
                        src="/assets/samin.png"
                        alt="Samin"
                        className="ranking-avatar"
                    />
                    <span className="ranking-name">삼민</span>
                    <span className="ranking-status">9일째 자는 중</span>
                    <button className="wake-up-btn">깨우기</button>
                </div>

                <div className="ranking-item">
                    <span className="rank-number">-</span>
                    <img
                        src="/assets/choiguitar.png"
                        alt="ChoiGuitar"
                        className="ranking-avatar"
                    />
                    <span className="ranking-name">최기타</span>
                    <span className="ranking-status">리그 미참여</span>
                </div>
            </div>
        </Container>
    );
};

export default RankingPage;
