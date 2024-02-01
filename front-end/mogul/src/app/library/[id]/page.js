import Navbar from "@/components/navbar/Navbar";
// import LibraryIndividual from "./LibraryIndividual";
import BackgroundTest from "./BackgroundTest";

export default function LibraryDetail({ params }) {
  return (
    <div>
      <div>
        <Navbar />
        {/* <LibraryIndividual userId={params.id} /> */}
        <BackgroundTest userId={params.id} />
      </div>
    </div>
  );
}
