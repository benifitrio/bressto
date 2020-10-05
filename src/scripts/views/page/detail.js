import UrlParser from '../../router/url-parser';
import DataRestaurantSource from '../../data/dataSource';
import template from '../template/template-creator';
import loader from '../template/loader';
import PostReview from '../../utils/reviewerPost';
import LikeButtonInitiator from '../../utils/like-button';
import FavoriteRestaurantDB from '../../data/db';

const Detail = {
  async render() {
    return `
        <div class="container">
          <div id="loading">

          </div>
        <div class="main">
          <div id="detail-restaurant">

          </div>
          <div class="like" id="likeButtonContainer"></div>
          <div class="form-review">
            <form>
              <div class="mb-3">
                <label for="inputName" class="form-label">Name</label>
                <input name="inputName" type="text" class="form-control" id="inputName">
              </div>
              <div class="mb-3">
                <label for="inputReview" class="form-label">Review</label>
                <textarea name="inputReview" cols="10 " rows="10 " class="form-control" id="inputReview"></textarea>
              </div>
              <button id="submit-review" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const ElementLoader = document.getElementById('loading');
    const detailContainer = document.getElementById('detail-restaurant');
    ElementLoader.innerHTML = loader.loaderTemplate();

    try {
      const data = await DataRestaurantSource.detailRestaurants(url.id);

      detailContainer.innerHTML += template.restaurantDetailTemplate(data.restaurant);
      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        FavoriteRestaurant: FavoriteRestaurantDB,
        data,
      });

      ElementLoader.style.display = 'none';
    } catch (error) {
      ElementLoader.innerHTML = loader.OfflineTemplate();
    }

    const btnSubmit = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#inputName');
    const reviewInput = document.querySelector('#inputReview');

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (nameInput.value === '' && reviewInput.value === '') {
        alert('Inputan tidak boleh ada yang kosong');
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      }
    });
  },
};

export default Detail;
