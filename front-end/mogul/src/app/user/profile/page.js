import Navbar from "@/components/navbar/Navbar";
import MypageContainer from "./MypageContainer";
import BackgroundTest from "./BackgroundTest";

export default function profile() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <BackgroundTest />
      </div>
    </div>
  );
}
