import CONFIG from '../../globals/config';

class template {
  static restaurantItemTemplate(result) {
    return `
        <div class="col">
        <a href="#/detail/${result.id}" tabindex="0">
            <div class="card" >
                <div class="card-img">
                    <img class=" lazyload" src="./images/placeholder.jpg" data-src="${CONFIG.BASE_IMAGE_URL_S + result.pictureId}" alt="restoran ${result.name}">
                    <div class="rating rate-${result.id}" >
                        <i class="fas fa-star"></i>
                        <span class="number-rating" aria-label="rating restoran ${result.name} ">${result.rating}</span>
                    </div>
                    <span class="city"><i class="fa fa-map-marker"></i>${result.city}</span>
                </div>
                <div class="description">
                    <h3 class="title">${result.name}</h3>
                    <p class="subtitle">${result.description}</p>
                </div>
            </div>
            </a>
        </div>`;
  }

  static restaurantDetailTemplate(data) {
    return `<h2 class="text-heading">${data.name}</h2>
            <div class="detail">
                <div class="images-detail">
                    <div>
                        <img class="img-res2" alt="${data.name}" src="${CONFIG.BASE_IMAGE_URL_M}${data.pictureId}" crossorigin="anonymous"/>
                    </div>
                    <ul class="detail-info">
                        <li><span><i title="address" class="fa fa-map-marker-alt"></i>&emsp;${data.address}, ${data.city}</span></li>
                        <li><span>${this.getRating(data.rating)}&emsp;${data.rating}</span></li>
                        <li>
                        <p class="description"><strong>Detail restaurant:</strong> <br>${data.description}</p></li>
                        <li>${data.categories.map((category) => `<span class="category"><strong>Masakan</strong> : ${category.name}</span>`).join('')}
                        </li>
                    </ul>
                </div>
                <h3>Menu</h3>
                <div class="detail-menu grid-2">
                    <div class="detail-food">
                        <h4><i class="fas fa-hamburger"></i>Food</h4>
                        <ul>
                            ${data.menus.foods.map((food) => `<li><i class="far fa-check-square"></i>${food.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="detail-drink">
                        <h4><i class="fas fa-mug-hot"></i>Drink</h4>
                        <ul>
                            ${data.menus.drinks.map((drink) => `<li><i class="far fa-check-square"></i>${drink.name}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <h3 class="title-review">Reviews</h3>
                <div class="detail-review grid-3">
                ${data.consumerReviews.map((review) => `<div class="detail-review-item">
                            <div class="review-header">
                                <p class="review-name"><img src="./images/boy.png" alt="reviewer ${review.name}">&nbsp;${review.name}</p>
                                <p class="review-date">di ulas ${review.date}</p>
                            </div>
                            <div class="review-body">${review.review}
                            </div>
                        </div>`).join('')}
                </div>
            </div>`;
  }

  static getRating(rating) {
    let stars = '';
    for (let i = 0; i < parseFloat(rating); i++) {
      if ((parseFloat(rating)) > i && i === (parseInt(rating))) {
        stars += '<i class="fas fa-star-half" aria-hidden="true" style="color: yellow"></i>';
      } else {
        stars += '<i class="fas fa-star" aria-hidden="true" style="color: yellow"></i>';
      }
    }
    return stars;
  }
}

export default template;
