/**
 * Background
 *  Given a list of values
 *  And when presented with each value from the list
 * Scenario - advance values from the list
 *  When I am presented with a value
 *  And I click on a "Next" button
 *  Then I should see the next value in the list
 * Scenario - recall values from the list previously accepted
 *  When I am presented with a value
 *  And I click on a "Previous" button
 *  Then I should see the previous value in the list
 * Scenario - confirm the value resonates with me
 *  When I am presented with a value that resonates with me
 *  And I click 'Yes'
 *  Then I should get confirmation that the value was accepted
 *  And that value should remain in the list
 * Scenario - deny the value resonates with me
 *  When I am presented with a value that does not resonate with me
 *  And I click 'No'
 *  Then I should get confirmation that the value was not accepted
 *  And that value should be removed from the list
 */
 it('visits the app', () => {
   // baseUrl in ./cypress.json
   cy.visit('/')
 });
it('presents cards for each value after "Accept" or "Reject is clicked"', () => {
  // asyc assign value of header to const
  cy.get('.modal__header').then(($value) => {

    const oldVal = $value.text();
    // click "accept"
    cy.get('.modal__btn--accept').click();
    // async assign new value to const and compare to oldVal
    cy.get('.modal__header').should(($newVal) => {
      expect($newVal.text()).not.to.eq(oldVal);
    })
  });
});
it('displays confirmation when button "Accept" is clicked', () => {

});
it('keeps affirmed value in list when button "Accept" is clicked', () => {

});
it('keeps affirmed value in list when button "Accept" is clicked', () => {

});
it('displays confirmation when button "Reject" is clicked', () => {});
// test with next and previous functionality
it('removes denied value from list when button "Reject" is clicked', () => {});
