// import { RateReviewSharp } from '@material-ui/icons';
import React from 'react'

export default function Review(props) {
  const { reviews } = props;
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(review => (
        <p key={review.id}>{review.content}</p>
      ))}
    </div>
  )
}



// <div class="ui comments">
//   <div class="comment">
//     <a class="avatar">
//       <img src="/images/avatar/small/stevie.jpg">
//     </a>
//     <div class="content">
//       <a class="author">{Stevie Feliciano}</a>
//       <div class="metadata">
//         <div class="rating">
//           <i class="star icon"></i>
//           5 Faves
//         </div>
//       </div>
//       <div class="text">
//         Hey guys, I hope this example comment is helping you read this documentation.
//       </div>
//     </div>
//   </div>
// </div>