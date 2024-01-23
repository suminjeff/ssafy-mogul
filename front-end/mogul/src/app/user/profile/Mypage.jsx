import React from "react";
import ProfileImage from "./ProfileImage";
import "./Mypage.module.css";

export default function Mypage() {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item">
          <ProfileImage />
        </div>
        <div className="grid-item">2번째칸</div>
        <div className="grid-item">3번째칸</div>
      </div>
    </div>
  );
}
