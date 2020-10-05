import { createUnLikeButtonTemplate, createLikeButtonTemplate } from '../views/template/button-template';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, FavoriteRestaurant, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurants = FavoriteRestaurant;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);

    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createUnLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurants(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
