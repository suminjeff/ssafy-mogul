import BoardList from "./BoardList";
import Navbar from "@/components/navbar/Navbar";
import BoardPaginaiton from "./BoardPagination";
import BackgroundTest from "./BackgroundTest";

export default function BoardDetail({ params }) {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <BackgroundTest boardId={params.id} />
      </div>
    </div>
  );
}
