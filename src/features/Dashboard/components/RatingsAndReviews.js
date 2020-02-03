import React, { memo, useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';
import { ContainerView } from 'shared';

import Ratings from './Ratings';
import Reviews from './Reviews';

function RatingsAndReviews() {

  const getRatings = useStoreActions(actions => actions.ratings.getData);
  const getReviews = useStoreActions(actions => actions.reviews.getItems);
  
  useEffect(() => {
    getReviews({ isRefresh: false });
    getRatings();
  }, []);

  return (
    <ContainerView>
      <Ratings />
      <Reviews />
    </ContainerView>
  );
}

export default memo(RatingsAndReviews);