import FavoriteRestaurantDB from '../src/scripts/data/db';
import createLikeButtonPresenterWithRestaurant from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking a Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantDB.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantDB.deleteRestaurants(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display unlike widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDB.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantDB.deleteRestaurants(1);
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDB.getAllRestaurants()).toEqual([]);
  });
});
