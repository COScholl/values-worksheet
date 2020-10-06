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
it(
  'When I am presented with a value and click "Next", I should see the next value from the list',
() => {
  // asyc assign value of header to const
  cy.get('.modal__header').then(($value) => {

    const oldVal = $value.text();
    // click "next"
    cy.get('.modal__value-span--next').click();
    // async assign new value to const and compare to oldVal
    cy.get('.modal__header').should(($newVal) => {
      expect($newVal.text()).not.to.eq(oldVal);
    })
  });
});
it(
  'When I am presented with a value and click "Prev", I should see the prev value from the list',
() => {
  // asyc assign value of header to const
  cy.get('.modal__header').then(($value) => {

    const oldVal = $value.text();
    // click "next"
    cy.get('.modal__value-span--next').click();
    cy.get('.modal__value-span--prev').click();
    // async assign new value to const and compare to oldVal
    cy.get('.modal__header').should(($newVal) => {
      expect($newVal.text()).to.eq(oldVal);
    })
  });
});
it('displays confirmation when button "Accept" is clicked', () => {
  cy.get('.modal__accept-dismiss-span--accept').click();
  cy.get('.modal__message--accepted').should(($message) => {
    expect($message.text()).to.not.eq(undefined);
  });
});
it(
  'When I am presented with a value and click "Accept", I should see the next value from the list', () => {
  // asyc assign value of header to const
  cy.get('.modal__header').then(($value) => {

    const oldVal = $value.text();
    // click "accept"
    cy.get('.modal__accept-dismiss-span--accept').click();
    // async assign new value to const and compare to oldVal
    cy.get('.modal__header').should(($newVal) => {
      expect($newVal.text()).not.to.eq(oldVal);
    })
  });
});
it('displays confirmation when button "Reject" is clicked', () => {
  cy.get('.modal__accept-dismiss-span--reject').click();
  cy.get('.modal__message--rejected').should(($message) => {
    expect($message.text()).to.not.eq(undefined);
  });
});
it(
  'When I am presented with a value and click "Reject", that value should be removed from the list', () => {
    // asyc assign value of header to const
    cy.get('.modal__header').then(($value) => {

      const oldVal = $value.text();
      // click "next"
      cy.get('.modal__accept-dismiss-span--reject').click();
      cy.get('.modal__value-span--prev').click();
      // async assign new value to const and compare to oldVal
      cy.get('.modal__header').should(($newVal) => {
        expect($newVal.text()).to.not.eq(oldVal);
      })
    });

});
