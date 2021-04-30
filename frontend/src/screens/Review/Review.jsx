// import { RateReviewSharp } from '@material-ui/icons';
import React from 'react'

export default function Review(props) {
  const { reviews } = props;
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(review => (
        <p key={review.id}>{review.name}</p>
      ))}
    </div>
  )
}
