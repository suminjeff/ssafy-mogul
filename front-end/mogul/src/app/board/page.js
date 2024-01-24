import Navbar from "@/components/navbar/Navbar";
import BoardList from "./[id]/BoardList";

export default function Board() {
  return (
    <div>
      <Navbar />
      게시판 페이지
      <BoardList />
    </div>
  );
}
