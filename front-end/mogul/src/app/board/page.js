import Navbar from "@/components/navbar/Navbar";
import BoardList from "./[id]/BoardList";

export default function Board() {
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
