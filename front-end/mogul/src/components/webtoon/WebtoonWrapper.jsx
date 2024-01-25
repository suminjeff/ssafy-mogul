import React from 'react';
import WebtoonThumbnailCard from './WebtoonThumbnailCard';

function WebtoonWrapper({ webtoons }) {
  
    return (
      <div className='grid grid-cols-5 gap-5'>
        {webtoons.map((webtoon) => (
          <WebtoonThumbnailCard webtoon={webtoon}/>
        ))}
      </div>
    );
}

export default WebtoonWrapper;