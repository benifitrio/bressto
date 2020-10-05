import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class DataRestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.lIST_RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async PostRestaurant(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    return response.json();
  }
}

export default DataRestaurantSource;
