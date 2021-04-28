import api from './api-helper'

export const getAllReviews = async () => {
  const resp = await api.get('/reviews');
  return resp.data;
}

// export const addReview = (trailId, reviewId) => {
//   const resp = await api.get(`/trails/${trailId}/reviews/${reviewId}`) 
//   return resp.data;
// }