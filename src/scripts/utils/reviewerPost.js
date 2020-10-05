import DataRestaurantSource from '../data/dataSource';

const PostReview = (url, name, review) => {
  const dataReview = {
    id: url.id,
    name,
    review,
  };

  DataRestaurantSource.PostRestaurant(dataReview);

  const reviewContainer = document.querySelector('.detail-review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);

  const newReview = `
    <div class="detail-review-item">
      <div class="review-header">
        <p class="review-name"><img src="./images/boy.png" alt="reviewer ${name}">&nbsp;${name}</p>
        <p class="review-date">${date}</p>
      </div>
      <div class="review-body">
        ${review}
      </div>
    </div>`;

  reviewContainer.innerHTML += newReview;
};

export default PostReview;
