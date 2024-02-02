"use client";
import NormalSignup from "./SignupForm";

export default function Form() {
  return (
    <div>
      {/* <Signup /> */}
      <div className="flex flex-col items-center justify-center h-screen">
        <div class="text-4xl font-bold mb-8 text-center">
          <a href="/"className="underline underline-offset-2">mogul</a>에 가입하세요.
        </div>
        <div className="mb-2">
          <NormalSignup />
        </div>
      </div>
    </div>
  );
}
