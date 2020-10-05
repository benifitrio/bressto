import LikeButtonInitiator from '../../src/scripts/utils/like-button';
import FavoriteRestaurantDB from '../../src/scripts/data/db';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    FavoriteRestaurant: FavoriteRestaurantDB,
    data: {
      restaurant,
    },
  });
};

export default createLikeButtonPresenterWithRestaurant;
