"use client"
import { React, useState } from 'react';
import ReviewCreateButton from './ReviewCreateButton';

function ReviewCreateRoot() {
  return (
    <div className='flex justify-between mx-20'>
      <p className='text-6xl font-semibold'>
        리뷰
      </p>
      <ReviewCreateButton />
    </div>
  )
}

export default ReviewCreateRoot;