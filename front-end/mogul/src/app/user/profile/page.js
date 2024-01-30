import Navbar from "@/components/navbar/Navbar";
import MypageContainer from "./MypageContainer";

export default function profile() {
  return (
    <div>
      <Navbar />
      {/* 사용자 지정색상은 아예 따로 tailwind.config.js에서
      처리하거나 직접하려면 style로 지정해야되나봐요 */}
      <div class="mx-20 rounded-md" style={{ backgroundColor: "#DED0B6" }}>
        <MypageContainer />
      </div>
    </div>
  );
}
