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

    //Expand each block.
    cy.get('a')
    .each(function($el, index, $list){
    console.log($el, index, $list)})
    .click({ force: true, multiple: true })

    //Check the Keys are present in each block
    cy.get('a')
    .each(function($el, index, $list){
    cy.contains('"timestamp"')
    cy.contains('"producer"')
    cy.contains('"confirmed"')
    cy.contains('"previous"')
    cy.contains('"transaction_mroot"')
    cy.contains('"action_mroot"')
    cy.contains('"schedule_version"')
    cy.contains('"new_producers"')
    cy.contains('"producer_signature"')
    cy.contains('"transactions"')})


    //Hide the raw content!
    cy.get('a')
    .each(function($el, index, $list){
    console.log($el, index, $list)})
    .click({ force: true, multiple: true })

    //todo Compare Current Blocks with new BLOCKS




    //Refresh the Blocks in the list
    cy.get('[data-cy=load]').click({ force: true})

    //Check list again after reloading
    cy.get('[data-cy=datablock]').should('have.length', 10)


  })
})
