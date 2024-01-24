"use client"
import { useRouter } from 'next/router';
import React from 'react';

function WebtoonThumbnailCard({ webtoon }) {
    const router = useRouter()
    return (
        <div onClick={router.push(`/${webtoon.id}`)}>
          웹툰 썸네일
        </div>
    );
}

export default WebtoonThumbnailCard;