import React, { useState } from 'react';
import '../../assets/friendPage/AddFriendsModal.css'; // 스타일은 따로 관리
import profile1 from '../../assets/friendPage/img/profile1.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddFriendsModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        findUserByUserCode(searchTerm);
    };

    const findUserByUserCode = async (userCode) => {
        try {
            const res = await axios.get(
                'http://localhost:9070/api/user/search/' + userCode,
            );
            if (res.data.length !== 0) {
                setSearchResults(res.data);
            } else {
                setSearchResults([]);
            }
        } catch (err) {
            console.error('검색 결과를 불러오는 도중 문제가 생겼습니다.', err);
        }
    };

    const profileClick = (userID) => {
        sessionStorage.setItem('findUserID', userID);
        navigate('/userInfo');
    };

    if (!isOpen) return null;

    return (
        <div className="find-user-modal-overlay">
            <div className="find-user-modal-content">
                <div className="find-user-modal-title">
                    <h2 className="find-user-modal-title">친구 찾기</h2>
                    <button
                        className="find-user-modal-close-btn"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                {/* 검색창 */}
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="회원 코드로 검색하기"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch(); // 엔터 키를 누르면 handleSearch 호출
                            }
                        }}
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        검색
                    </button>
                </div>

                {/* 검색 결과 */}
                <div className="search-results">
                    {searchResults.length > 0 ? (
                        searchResults.map((result, index) => (
                            <div
                                key={index}
                                className="search-result-item"
                                onClick={() => profileClick(result.userID)}
                            >
                                <div className="search-profile-image">
                                    {/* 기본 프로필 이미지를 사용하거나, 필요시 이미지 경로를 사용 */}
                                    <img src={profile1} alt="profile" />
                                </div>
                                <div className="search-profile-info">
                                    <p className="search-user-name">
                                        {result.userName}
                                    </p>
                                    <p className="search-user-code">
                                        {result.userCode}
                                    </p>
                                </div>
                                <button className="search-add-friend-btn">
                                    +
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            일치하는 검색 결과가 없습니다.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddFriendsModal;
