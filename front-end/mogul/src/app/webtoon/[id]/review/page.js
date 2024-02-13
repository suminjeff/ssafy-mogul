import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/webtoon/header/Header";
import ReviewWrapperAll from "@/components/webtoon/review/ReviewWrapperAll";
export default async function WebtoonReviewAll(props) {
  return (
    <>
      <Navbar />
      <Header heading={"이 웹툰의 리뷰"}/>
      <ReviewWrapperAll/>
    </>
  );
}
