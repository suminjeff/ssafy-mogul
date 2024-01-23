import ReviewCard from '@/components/ReviewCard'




export default function WebtoonDetail(props) {
  return (
    <div>
      웹툰 상세 페이지
      <p>{props.params.id}</p>
    </div>
  )
}