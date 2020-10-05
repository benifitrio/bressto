import FavoriteRestaurantDB from '../../data/db';
import template from '../template/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="container">
        <h2 class="text-heading">Your Favorite Restaurant</h2>
        <div id="restaurant">

        </div>
        </div>
      </div>`;
  },

  async afterRender() {
    const data = await FavoriteRestaurantDB.getAllRestaurants();
    const listContainer = document.querySelector('#restaurant');

    if (data.length === 0) {
      listContainer.innerHTML = `
        <h3>You don't have any Favorite Restaurants</h3>`;
    } else {
      data.forEach((restaurant) => {
        listContainer.innerHTML += template.restaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
