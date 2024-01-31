import Navbar from "@/components/navbar/Navbar";
import LibraryIndividual from "./LibraryIndividual";

export default function LibraryDetail({ params }) {
  return (
    <div>
      <div>
        <Navbar />
        <LibraryIndividual userId={params.id} />
      </div>
    </div>
  );
}
