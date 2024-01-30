import Navbar from "@/components/navbar/Navbar"
import WebtoonWrapper from "@/components/webtoon/WebtoonWrapper";

export default async function WebtoonAll() {
  const pno = 1;
  const count = 10;
  const response = await fetch(`http://i10a206.p.ssafy.io:8080/webtoon/all?pno=${pno}&count=${count}`);
  const webtoons = await response.json();
  return (
    <div>
      <Navbar/>
      <div>
        <h1>전체 웹툰</h1>
        <WebtoonWrapper webtoons={webtoons} />
      </div>
    </div>
  )
}