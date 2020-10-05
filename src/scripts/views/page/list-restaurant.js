import DataRestaurantSource from '../../data/dataSource';
import loader from '../template/loader';
import template from '../template/template-creator';

const Home = {
  async render() {
    return `
      <div class="container">
        <h2 class="text-heading">List Restaurant Berbagai Kota</h2>
        <div id="loading">

        </div>
        <div id="restaurant">

        </div>
      </div>`;
  },

  async afterRender() {
    const ElementLoader = document.getElementById('loading');
    const bodyContent = document.querySelector('#restaurant');
    ElementLoader.innerHTML = loader.loaderTemplate();
    bodyContent.innerHTML = '';

    try {
      const restaurants = await DataRestaurantSource.listRestaurants();
      restaurants.forEach((result) => {
        bodyContent.innerHTML += template.restaurantItemTemplate(result);
      });
      ElementLoader.style.display = 'none';
    } catch (err) {
      ElementLoader.innerHTML = loader.OfflineTemplate();
    }
  },
};

export default Home;
