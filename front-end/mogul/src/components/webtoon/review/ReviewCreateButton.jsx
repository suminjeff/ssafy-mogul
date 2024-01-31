"use client"
import React from 'react';

function ReviewCreateButtonRoot() {
  return(
    <button
    className="hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    style={{
      backgroundColor: "#DED0B6",
    }}
    >
      리뷰 쓰기
    </button>
  )
}

export default ReviewCreateButtonRoot;