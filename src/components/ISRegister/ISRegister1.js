import React, { useState, useEffect, useRef } from 'react';

function ISRegister1({ nextStep, prevStep }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsScrolled(true);
                }
            },
            {
                root: null,
                threshold: 1.0, // 100%가 뷰포트에 보일 때만 트리거됨
            },
        );

        if (bottomRef.current) {
            observer.observe(bottomRef.current);
        }

        return () => {
            if (bottomRef.current) {
                observer.unobserve(bottomRef.current);
            }
        };
    }, []);

    return (
        <div className="mainContainer">
            <h2>중요사항 설명</h2>
            <div
                id="scrollableContent"
                style={{
                    height: '200px',
                    overflowY: 'scroll',
                    border: '1px solid black',
                }}
            >
                {/* 중요한 내용이 여기에 들어갑니다 */}
                <p>우대금리 조건 선택 시마다 예상 금리가 계산됩니다.</p>
                <p>기본 이용: 연 7.0%</p>
                <p>쓸거지 출석체크 20회 이상 시: 우대금리 2.0%</p>
                <p>쓸거지 가입 시: 1.0%</p>
                <p>
                    여기에 더 많은 내용을 추가하여 스크롤 테스트를 해보세요...
                </p>
                <p>스크롤이 맨 아래로 내려갈 때까지 스크롤 하세요...</p>
                <p>이것은 테스트를 위한 추가 텍스트입니다...</p>
                <p ref={bottomRef}>마지막 텍스트입니다.</p>{' '}
                {/* 스크롤 마지막 부분을 감지하는 요소 */}
            </div>
            <button onClick={prevStep}>이전</button>
            <button onClick={nextStep} disabled={!isScrolled}>
                다음
            </button>
        </div>
    );
}

export default ISRegister1;
