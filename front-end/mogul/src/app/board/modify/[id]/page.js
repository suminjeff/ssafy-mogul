import Navbar from "@/components/navbar/Navbar";

import BackgroundTest from "./BackgroundTest";

export default function Page({ params }) {
  return (
    <div>
      <Navbar />
      {/* <div>글수정 페이지입니다 글번호는 : {params.id}</div> */}
      <div className="text-center">
        <BackgroundTest boardId={params.id} />
      </div>
    </div>
  );
}
