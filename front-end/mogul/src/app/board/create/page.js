import BoardCreate from "./BoardCreate";
import Navbar from "@/components/navbar/Navbar";

export default function BoardWrite() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <BoardCreate />
      </div>
    </div>
  );
}
