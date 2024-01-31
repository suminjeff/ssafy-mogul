import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";

export default function Mypage() {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className="col-span-1 flex items-center justify-center">
          <ProfileImage />
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
}
