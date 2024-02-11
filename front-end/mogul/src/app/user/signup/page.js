"use client";
import Signup from "./Signup";

// export const dynamic = "force-dynamic";

export default function Form() {
  const token =
    typeof window !== "undefined"
      ? sessionStorage.getItem("accessToken")
      : null;

  // const token = sessionStorage.getItem("accessToken");
  // console.log(token);

  return (
    <div>
      <div className="text-center p-8">
        <Signup />
      </div>
    </div>
  );
}
