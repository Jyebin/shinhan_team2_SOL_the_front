import React, { useState } from 'react';
import '../assets/friendPage/FriendsPage.css';
import Container from '../components/common/Container';

import flexBird from '../assets/attendancePage/img/flexBird.png';
import poorBird from '../assets/attendancePage/img/poorBird.png';

const dummyFollowing = [
    { id: 1, name: 'John Doe', xp: 42616, avatar: flexBird },
    { id: 2, name: 'Jane Smith', xp: 30876, avatar: poorBird },
    { id: 3, name: 'Alice Johnson', xp: 7534, avatar: flexBird },
    { id: 4, name: 'Bob Brown', xp: 4162, avatar: poorBird },
    { id: 5, name: 'bob', xp: 1052, avatar: flexBird },
    { id: 6, name: 'john', xp: 203, avatar: poorBird },
];

const dummyFollowers = [
    { id: 1, name: 'John Doe', xp: 50000, avatar: poorBird },
    { id: 2, name: 'Jane Smith', xp: 35000, avatar: flexBird },
    { id: 3, name: 'Alice Johnson', xp: 20000, avatar: flexBird },
    { id: 4, name: 'Bob Brown', xp: 15000, avatar: flexBird },
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
            <br />
            <br />
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
        </Container>
    );
};

export default FriendsPage;
