import ReviewCard from './ReviewCard';

function ReviewWrapper({ reviews }) {
    return (
      <div className='mx-10 my-20'>
        <div className='grid grid-cols-5 gap-10 mx-10'>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review}/>
          ))}
        </div>
      </div>
    );
}

export default ReviewWrapper;