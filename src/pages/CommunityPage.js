import React from 'react';
import '../assets/community/CommunityPage.css';

function Pagination() {
    return (
        <div className="pagination">
            <button className="page-button">이전</button>
            <button className="page-button active">1</button>
            <button className="page-button">2</button>
            <button className="page-button">3</button>
            <button className="page-button">4</button>
            <button className="page-button">5</button>
            <button className="page-button">다음</button>
        </div>
    );
}

function FixedButtons() {
    const scrollToTop = () => {
        document.querySelector('.community-content').scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="fixed-buttons">
                <button className="write-button">글쓰기</button>
            </div>
            <button className="to-top-button" onClick={scrollToTop}>
                ⬆
            </button>
        </>
    );
}

function SearchBar() {
    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" placeholder="검색어를 입력해주세요." />
                <button className="search-button">검색</button>
            </div>
            <div className="view-toggle">
                <button className="view-button">
                    <span role="img" aria-label="grid view">
                        □
                    </span>
                </button>
                <button className="view-button">
                    <span role="img" aria-label="list view">
                        ≡
                    </span>
                </button>
            </div>
        </div>
    );
}

function Tabs() {
    return (
        <div className="tabs">
            <button className="tab active">전체글 보기</button>
            <button className="tab">내가 쓴 글</button>
        </div>
    );
}

function PostGrid() {
    const dummy = [
        {
            title: '게임 스킨 살까요 말까요',
            comments: 123,
            yes: 123,
            no: 456,
            tags: ['태그1', '태그2', 'ㅁㄴㅇㄹ'],
        },
        {
            title: '배고픈데 밥먹을까요?',
            comments: 123,
            yes: 123,
            no: 456,
            tags: ['ㅜㅐ', 'ㄹㅇㅁ', 'ㅁㄴㅇㄹ'],
        },
        {
            title: '심ㅅ미한게 게임 사도 될까요',
            comments: 123,
            yes: 123,
            no: 456,
            tags: ['ㄴ', 'ㅁㅁㅁ', 'ㄹㄹㄹ'],
        },
        {
            title: '자전거 못타는데 자전거 사도 되나요?',
            comments: 123,
            yes: 123,
            no: 456,
            tags: ['태그1', '태그2', '태그3'],
        },
        {
            title: '운ㅁㄴㅇㄹ워치',
            comments: 123,
            yes: 123,
            no: 456,
            tags: ['태그1', '태그2', '태그3'],
        },
        {
            title: 'ㅁㄴㅇㄹ데 애플워치',
            comments: 123,
            yes: 123,
            no: 456,
            tags: ['ㅇㅇ', 'ㅍㅍ', 'ㅋㅋ'],
        },
        {
            title: '운ㅁㄴㅇㄹ워ㅇㅇ',
            comments: 123,
            yes: 123,
            no: 456,
            tags: ['ㅁㅁ', 'ㅇㅇ', 'ㄴㄴ'],
        },
        {
            title: '운동 제대로 하고 싶은데 애플워치',
            comments: 123,
            yes: 123,
            no: 456,
            tags: ['태그1', '태그2', '태그3'],
        },
        {
            title: 'ㄴㄻㅇㅁㄹㅇㄴㄹㅇ',
            comments: 123,
            yes: 123,
            no: 456,
            tags: ['태그1', '태그2', '태그3'],
        },
    ];

    return (
        <div className="post-grid">
            {dummy.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

function PostCard({ post }) {
    return (
        <div className="post-card">
            <div className="post-image"></div>
            <h3>{post.title}</h3>
            <div className="post-stats">
                <span>💬 {post.comments}</span>
                <span>❤️ {post.yes}</span>
                <span>👎 {post.no}</span>
            </div>
            <div className="post-tags">
                {post.tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`tag-${tag}`}
                        onClick={() => {
                            alert('태그 클릭하면 바로 검색 기능 넣기');
                        }}
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

function CommunityPage() {
    return (
        <div className="community-container">
            <div className="community-header">
                <Tabs />
                <SearchBar />
            </div>
            <div className="community-content">
                <PostGrid />
                <Pagination />
            </div>
            <FixedButtons />
        </div>
    );
}

export default CommunityPage;
