// eslint-disable-next-line no-unused-vars
const assert = require('assert');

Feature('Favorite_Restaurants');
Before((I) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = "You don't have any Favorite Restaurants";

Scenario('Showing empty favorite restaurants', (I) => {
  I.see(firstCondition, '#restaurant');
});

Scenario('Add and Remove liking one restaurant to bookmark', async (I) => {
  I.see(firstCondition, '#restaurant');

  I.amOnPage('/');
  I.seeElement('.col a');

  const firstRestaurant = locate('.card h3').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(locate('.col a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant .col');
  const likedRestaurantTitle = await I.grabTextFrom('.card h3');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(locate('.col a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.dontSeeElement('button[aria-label="unlike this restaurant"]');
});
