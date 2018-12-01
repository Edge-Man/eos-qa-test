describe('First Test', function() {
  it('Visits the main page for getting 10 Blocks', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('id')
    cy.contains('timestamp')
    cy.contains('action_cnt')

    //Check the load button displays 10
    cy.get('[data-cy=load]').contains('10')


    //Check we still see all block attributes
    cy.contains('id')
    cy.contains('timestamp')
    cy.contains('action_cnt')

    //Click on the each block and check the values are there.
    cy.get('a')
    .each(function($el, index, $list){
    console.log($el, index, $list)})
    .click({ force: true, multiple: true })
    cy.contains('timestamp')
    cy.contains('action_cnt')
    cy.contains('producer')
    cy.contains('confirmed')
    cy.contains('previous')
    cy.contains('transaction_mroot')
    cy.contains('action_mroot')
    cy.contains('schedule_version')
    cy.contains('new_producers')
    cy.contains('producer_signature')
    cy.contains('transactions')


    //Hide the raw content!
    cy.get('a')
    .each(function($el, index, $list){
    console.log($el, index, $list)})
    .click({ force: true, multiple: true })


    //Refresh the Blocks in the list
    cy.get('[data-cy=load]').click({ force: true})

    //Check list again after reloading
    cy.get('[data-cy=datablock]').should('have.length', 10)
    //.click({ multiple: true })
    //Expand the first block to see details
    //cy.get('[data-cy=datablock]').eq(0)

  })
})
