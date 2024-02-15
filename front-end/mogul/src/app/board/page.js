import Navbar from "@/components/navbar/Navbar";
import BackgroundTest from "./BackgroundTest";

export const dynamic = "force-dynamic";

export default function Board() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <BackgroundTest />
      </div>
    </div>
  );
}
