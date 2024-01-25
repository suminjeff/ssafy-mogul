import React from 'react';

function WebtoonDetailCard({ webtoon }) {
    return (
        <div style={{ width: '100%', height: '200px', border: '1px solid black', padding: '20px', margin: '10px', boxSizing: 'border-box' }}>
            <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>제목</div>
            <div style={{ marginBottom: '10px' }}>작가</div>
            {/* <div>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</div> */}
        </div>
    );
}

export default WebtoonDetailCard;