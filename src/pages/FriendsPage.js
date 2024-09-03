import React, { useState } from 'react';
import '../assets/friendPage/FriendsPage.css';
import Container from '../components/common/Container';

const dummyFollowing = [
    { id: 1, name: 'Minji', xp: 42616, avatar: '/assets/minji.png' },
    { id: 2, name: '서민구', xp: 30876, avatar: '/assets/seomin.png' },
    { id: 3, name: '조명근', xp: 7534, avatar: '/assets/jomyung.png' },
    { id: 4, name: 'Jiwan Back', xp: 4162, avatar: '/assets/jiwan.png' },
    { id: 5, name: 'minseo', xp: 1052, avatar: '/assets/minseo.png' },
    { id: 6, name: '임지섭', xp: 203, avatar: '/assets/limjisub.png' },
];

const dummyFollowers = [
    { id: 1, name: 'John Doe', xp: 50000, avatar: '/assets/johndoe.png' },
    { id: 2, name: 'Jane Smith', xp: 35000, avatar: '/assets/janesmith.png' },
    { id: 3, name: 'Alice Johnson', xp: 20000, avatar: '/assets/alice.png' },
    { id: 4, name: 'Bob Brown', xp: 15000, avatar: '/assets/bobbrown.png' },
];

const FriendsPage = () => {
    const [activeTab, setActiveTab] = useState('following');

    const renderFriendsList = (friends) => {
        return friends.map((friend) => (
            <div className="friend-item" key={friend.id}>
                <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="friend-avatar"
                />
                <div className="friend-info">
                    <span className="friend-name">{friend.name}</span>
                    <span className="friend-xp">{friend.xp} XP</span>
                </div>
                <span className="arrow">&gt;</span>
            </div>
        ));
    };

    return (
        <Container
            style={{
                backgroundColor: '#f3f6fb',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <div className="tab-menu">
                <span
                    className={`tab-item ${activeTab === 'following' ? 'active' : ''}`}
                    onClick={() => setActiveTab('following')}
                >
                    FOLLOWING
                </span>
                <span
                    className={`tab-item ${activeTab === 'followers' ? 'active' : ''}`}
                    onClick={() => setActiveTab('followers')}
                >
                    FOLLOWERS
                </span>
            </div>
            <div className="friends-list">
                {activeTab === 'following'
                    ? renderFriendsList(dummyFollowing)
                    : renderFriendsList(dummyFollowers)}
            </div>
            <div className="add-friends">
                <button className="add-friends-btn">ADD FRIENDS</button>
            </div>
        </Container>
    );
};

export default FriendsPage;
