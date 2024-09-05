import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/friendPage/UserInfoPage.css';
import Container from '../components/common/Container';

import flexBird from '../assets/attendancePage/img/flexBird.png';
import poorBird from '../assets/attendancePage/img/poorBird.png';

import goldBird from '../assets/common/img/goldBird.png';
import speechBubble from '../assets/common/img/speechBubble.png';
const UserInfoPage = () => {
    const navigate = useNavigate();

    const quote_flex = '나는 부목눈이!';
    const quote_poor = '나는 거목눈이...';
    const userData = {
        username: '하소영',
        usercode: '@1L0PS',
        attendanceDays: 30,
        profileImg: flexBird,
        profileQuote: quote_flex,
        followers: 6,
        followings: 6,
        rank: 'GOLD',
    };

    const goToFollowing = () => {
        navigate('/friend'); // '/following' 경로로 이동
    };

    const goToFollowers = () => {
        navigate('/friend'); // '/followers' 경로로 이동
    };

    return (
        <Container
            style={{
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <br />
            <br />
            <div className="profile-section">
                <p className="profile-quote">{userData.profileQuote}</p>
                <img
                    src={userData.profileImg}
                    alt="Profile"
                    className="profile-image"
                />
            </div>
            <div className="user-info">
                <h2 className="user-name">{userData.username}</h2>
                <p className="user-id">{userData.usercode}</p>
                <div className="follow-info">
                    <div className="following" onClick={goToFollowing}>
                        <span className="follow-count">
                            {userData.followings}
                        </span>
                        <span>Following</span>
                    </div>
                    <div className="followers" onClick={goToFollowers}>
                        <span className="follow-count">
                            {userData.followers}
                        </span>
                        <span>Followers</span>
                    </div>
                </div>
                <div className="btn-div">
                    <button className="add-friends-btn">+ ADD FRIENDS</button>
                </div>
            </div>
            <div className="attendance-section">
                <h2 className="attendance-top">
                    현재까지...{' '}
                    <span className="attendance-days">
                        {userData.attendanceDays}일
                    </span>{' '}
                    출석하셨습니다.
                </h2>
                <p className="attendance-link">
                    {userData.username}님의 이번 달 출석 현황 보러가기 →
                </p>
            </div>
            <div className="ranking-section">
                <h2>Ranking</h2>
                <div className="rank-info">
                    <div className="rank-images">
                        <img
                            src={goldBird}
                            className="rank-mark"
                            alt="gold bird"
                        />
                        <div className="speech-container">
                            <img
                                src={speechBubble}
                                className="speech-bubble"
                                alt="speech bubble"
                            />
                            <span className="speech-text">
                                나 골드됐다 짱이지
                            </span>
                        </div>
                    </div>
                    <div className="rank-description">
                        {userData.username}님은 현재 {userData.rank} 리그입니다!
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default UserInfoPage;
