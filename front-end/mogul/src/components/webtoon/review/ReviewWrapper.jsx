import ReviewCard from './ReviewCard';

function ReviewWrapper({ reviews }) {
  const firstFiveReviews = reviews.slice(0, 5);
  return (
    <div className='mx-10 my-20'>
      <div className='grid grid-cols-5 gap-10 mx-10'>
        {firstFiveReviews.map((review, index) => (
          <ReviewCard key={index} review={review}/>
        ))}
      </div>
    </div>
  );
}


export default ReviewWrapper;