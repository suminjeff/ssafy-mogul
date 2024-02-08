import Navbar from "@/components/navbar/Navbar";
import BackgroundTest from "./BackgroundTest";

export default function LibraryList({ params }) {
  return (
    <div>
      <div>
        <Navbar />
        <BackgroundTest userIdParam={params.id} />
      </div>
    </div>
  );
}
