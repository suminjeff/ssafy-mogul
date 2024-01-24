"use client";
import { useRouter } from "next/router";

const BoardDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  return <div>글번호 : {id} 에 해당하는 페이지</div>;
};

export default BoardDetail;
