import React from 'react';
import WebtoonThumbnailCard from './WebtoonThumbnailCard';

function WebtoonWrapper({ webtoons }) {
  
    return (
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        {webtoons.map((webtoon) => (
          <WebtoonThumbnailCard webtoon={webtoon}/>
        ))}
      </div>
    );
}

export default WebtoonWrapper;