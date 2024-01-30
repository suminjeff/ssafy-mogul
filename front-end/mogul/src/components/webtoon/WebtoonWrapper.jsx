import React from 'react';
import WebtoonThumbnailCard from './WebtoonThumbnailCard';

function WebtoonWrapper({ webtoons }) {
  
    return (
      <div className='grid grid-cols-5 gap-10 mx-10'>
        {webtoons.map((webtoon, index) => (
          <WebtoonThumbnailCard key={index} webtoon={webtoon}/>
        ))}
      </div>
    );
}

export default WebtoonWrapper;