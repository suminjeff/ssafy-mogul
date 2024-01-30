import BoardList from "./BoardList";
import Navbar from "@/components/navbar/Navbar";
import BoardPaginaiton from "./BoardPagination";

export default function BoardDetail({ params }) {
  return (
    <div>
      <Navbar />
      <div
        className="justify-center items-center"
        style={{ backgroundColor: "#DED0B6" }}
      >
        <div className="mx-auto" style={{ maxWidth: "85%" }}>
          <BoardList />
        </div>
      </div>
    </div>
  );
}
