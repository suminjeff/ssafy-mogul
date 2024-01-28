import Navbar from "@/components/navbar/Navbar";
import BoardModify from "./BoardModify";

export default function Page({ params }) {
  return (
    <div>
      <Navbar />
      {/* <div>글수정 페이지입니다 글번호는 : {params.id}</div> */}
      <BoardModify boardId={params.id} />
    </div>
  );
}
