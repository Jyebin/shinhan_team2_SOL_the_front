import React from 'react';
import '../assets/friendPage/UserInfoPage.css';
import Container from '../components/common/Container';

const UserInfoPage = () => {
    return (
        <Container
            style={{
                backgroundColor: '#f3f6fb',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <div className="user-info-container">
                <div className="profile-section">
                    <img
                        src="/assets/profile-image.png"
                        alt="Profile"
                        className="profile-image"
                    />
                    <p className="profile-quote">나는 거(지오)목눈이..</p>
                </div>
                <div className="user-info">
                    <h2 className="user-name">소영</h2>
                    <p className="user-id">@1L0PS</p>
                    <div className="follow-info">
                        <div className="following">
                            <span className="follow-count">6</span>
                            <span>Following</span>
                        </div>
                        <div className="followers">
                            <span className="follow-count">7</span>
                            <span>Followers</span>
                        </div>
                    </div>
                    <button className="add-friends-btn">+ ADD FRIENDS</button>
                </div>
                <div className="attendance-section">
                    <p>
                        현재까지...{' '}
                        <span className="attendance-days">30일</span>{' '}
                        출석하셨습니다.
                    </p>
                    <p className="attendance-link">
                        소영님의 이번 달 출석 현황 보러가기 →
                    </p>
                </div>
                <div className="ranking-section">
                    <h2>Ranking</h2>
                    <p>내 친구 중에 8등이에요!</p>
                </div>
            </div>
        </Container>
    );
};

export default UserInfoPage;
