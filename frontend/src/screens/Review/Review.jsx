import React from "react";

export default function Review(props) {
  const { reviews } = props;
  return (
    <div className="trail-reviews">
      <h3>Reviews</h3>
      {reviews.map((review) => (
        <p key={review.id}>{review.content}</p>
      ))}
    </div>
  );
}