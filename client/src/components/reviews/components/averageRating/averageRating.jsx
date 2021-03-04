import React from 'react';

function calculateAverageRating(ratings) {
  const entries = Object.entries(ratings);
  let total = 0;
  let numOfRatings = 0;
  for (let i = 0; i < entries.length; i++) {
    total += parseInt(entries[i][0]) * parseInt(entries[i][1]);
    numOfRatings += parseInt(entries[i][1])
  }
  const average = parseFloat(total / numOfRatings).toFixed(2);
  return average;
}

const AverageRating = ({metaReview}) => {
  let rating = null;
  if (metaReview) {
    rating = calculateAverageRating(metaReview.ratings);
  }
  return (
    <span>{rating}</span>
  );
};


export default AverageRating;
