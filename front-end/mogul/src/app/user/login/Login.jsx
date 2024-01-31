"use client";

import NormalLogin from "./NormalLogin";

export default function Form() {
  return (
    <div>
      {/* <login /> */}
      <div className="flex flex-col items-center justify-center h-screen">
        <div div class="text-4xl font-bold mb-8 text-center">
          <div className="signup_text">mogul에 로그인하세요.</div>
        </div>
        <div className="mb-2">
          <NormalLogin />
        </div>
      </div>
    </div>
  );
}
