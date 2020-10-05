import { itActsAsFavoriteRestaurantsModel } from './contract/favRestaurantContract';
import FavoriteRestaurantDB from '../src/scripts/data/db';

describe('Favorite Restaurants Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDB.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantDB.deleteRestaurants(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantsModel(FavoriteRestaurantDB);
});
