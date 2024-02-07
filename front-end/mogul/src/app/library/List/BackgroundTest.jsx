import MyLibraryList from "./MyLibraryList";
import LibraryList from "./[id]/LibraryList";

export default function BackgroundTest() {
  return (
    <div>
      <div
        className="mx-auto mt-11 mb-10 border-black rounded-3xl "
        style={{ backgroundColor: "#DED0B6", maxWidth: "80%" }}
      >
        <div>
          <div className="text-center p-8">
            <MyLibraryList />
          </div>
        </div>
      </div>
    </div>
  );
}
