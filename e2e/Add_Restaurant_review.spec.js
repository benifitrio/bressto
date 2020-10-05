Feature('Add Restaurant Review');
Before((I) => {
  I.amOnPage('/');
});

Scenario('Add review', async (I) => {
  const reviewText = 'Mencoba Review dengan E2E Testing';

  I.seeElement('.col a');
  I.click(locate('.col a').first());
  I.waitForElement('#detail-restaurant');
  I.seeElement('.form-review form');

  I.fillField('Name', 'Beni');
  I.fillField('Review', reviewText);
  I.click('#submit-review');

  I.see(reviewText, '.review-body');
});
