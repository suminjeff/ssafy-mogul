import Navbar from "@/components/navbar/Navbar";
import MypageContainer from "./MypageContainer";
import BackgroundTest from "./BackgroundTest";

export default function profile() {
  return (
    <div>
      <Navbar />
      {/* 사용자 지정색상은 아예 따로 tailwind.config.js에서
      처리하거나 직접하려면 style로 지정해야되나봐요 */}
      <div className="text-center">
        <BackgroundTest />
      </div>
    </div>
  );
}
