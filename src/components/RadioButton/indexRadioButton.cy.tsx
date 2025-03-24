import React from 'react';
import RadioButton from './index';

const mockPlans = [
  {
    "id": 32,
    "storeId": "anual_parcelado_iugu",
    "title": "Premium Anual",
    "description": "Parcelado",
    "caption": "7 Dias Grátis",
    "fullPrice": 600,
    "discountAmmount": 60,
    "discountPercentage": 0.1,
    "periodLabel": "mês",
    "period": "annually",
    "discountCouponCode": null,
    "order": 1,
    "priority": 1,
    "gateway": "iugu",
    "splittable": true,
    "installments": 12,
    "acceptsCoupon": true
  },
  {
    "id": 33,
    "storeId": "anual_a_vista_iugu",
    "title": "Premium Anual",
    "description": "À Vista",
    "caption": "7 Dias Grátis",
    "fullPrice": 7200,
    "discountAmmount": 720,
    "discountPercentage": 0.1,
    "periodLabel": "ano",
    "period": "annually",
    "discountCouponCode": null,
    "order": 2,
    "priority": 2,
    "gateway": "iugu",
    "splittable": false,
    "installments": 1,
    "acceptsCoupon": true
  }
];


describe("RadioButton Component", () => {
  it("Deve renderizar corretamente os planos", () => {
    cy.mount(<RadioButton selected={null} plans={mockPlans} handleChange={cy.stub()} />);
    
    cy.contains("Premium Anual | Parcelado").should("exist");
    cy.contains("Premium Anual | À Vista").should("exist");
  });

  it("Deve selecionar um plano ao clicar", () => {
    const handleChange = cy.stub();
    cy.mount(<RadioButton selected={null} plans={mockPlans} handleChange={handleChange} />);

    cy.get("input[type='radio']").first().click();
    cy.wrap(handleChange).should("have.been.calledWith", "32");
  });

  it("Deve marcar o plano correto como selecionado", () => {
    cy.mount(<RadioButton selected="33" plans={mockPlans} handleChange={cy.stub()} />);
    
    cy.get("input[type='radio']").eq(1).should("be.checked");
  });
});
