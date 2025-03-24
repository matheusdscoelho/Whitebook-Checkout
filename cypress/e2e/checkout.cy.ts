describe('Checkout Form', () => {
  beforeEach(() => {
    cy.visit('/checkout');
  });

  it('Deve preencher e enviar o formulário com sucesso', () => {
    cy.get('#cardNumber').type('4111 1111 1111 1111');
    cy.get('#expiry').type('12/25');
    cy.get('#cvv').type('123');
    cy.get('#cardName').type('Fulano de Tal');
    cy.get('#cpf').type('123.456.789-09');
    cy.get('#cupom').type('DESCONTO10');
    cy.get('#parcelas').select('3');

    cy.intercept('POST', '/subscription', { statusCode: 200 }).as('subscription');

    cy.get('button[type="submit"]').click();

    cy.wait('@subscription').its('response.statusCode').should('eq', 200);
    cy.url().should('include', '/checkout/confirmation');
  });
});