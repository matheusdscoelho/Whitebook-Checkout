import React from "react";
import CheckoutForm from "./index";

describe("<CheckoutForm />", () => {
  it("renders correctly", () => {
    cy.mount(<CheckoutForm onSubmit={cy.stub()} isPending={false} />);

    cy.contains("Estamos quase lá!").should("be.visible");
    cy.contains("Insira seus dados de pagamento abaixo:").should("be.visible");
  });

  it("should show validation errors when submitting empty form", () => {
    cy.mount(<CheckoutForm onSubmit={cy.stub()} isPending={false} />);

    cy.get("form").submit();

    cy.contains("Número do cartão deve ter 16 dígitos").should("be.visible");
    cy.contains("Data de validade inválida").should("be.visible");
    cy.contains("CVV deve ter 3 dígitos").should("be.visible");
    cy.contains("Nome impresso no cartão deve ter pelo menos 3 caracteres").should("be.visible");
    cy.contains("CPF deve ter 11 dígitos").should("be.visible");
    cy.contains("Por favor, selecione o número de parcelas").should("be.visible");
  });

  it("should show error message if card number is invalid", () => {
    cy.mount(<CheckoutForm onSubmit={cy.stub()} isPending={false} />);

    cy.get('input[name="cardNumber"]').type("1234 5678 9012 345");
    cy.get("form").submit();

    cy.contains("Número do cartão deve ter 16 dígitos").should("be.visible");
  });

  it("should show error message if expiry date is invalid", () => {
    cy.mount(<CheckoutForm onSubmit={cy.stub()} isPending={false} />);

    cy.get('input[name="expiry"]').type("13/21");
    cy.get("form").submit();

    cy.contains("Formato inválido. Exemplo: MM/AA").should("be.visible");
  });

  it("should show error message if CVV is invalid", () => {
    cy.mount(<CheckoutForm onSubmit={cy.stub()} isPending={false} />);

    cy.get('input[name="cvv"]').type("12");
    cy.get("form").submit();

    cy.contains("CVV deve ter 3 dígitos").should("be.visible");
  });

  it("should show error message if name on card is too short", () => {
    cy.mount(<CheckoutForm onSubmit={cy.stub()} isPending={false} />);

    cy.get('input[name="cardName"]').type("Jo");
    cy.get("form").submit();

    cy.contains("Nome impresso no cartão deve ter pelo menos 3 caracteres").should("be.visible");
  });

  it("should show error message if CPF is invalid", () => {
    cy.mount(<CheckoutForm onSubmit={cy.stub()} isPending={false} />);

    cy.get('input[name="cpf"]').type("000.000.000-00");
    cy.get("form").submit();

    cy.contains("CPF inválido.").should("be.visible");
  });

  it("should submit the form successfully when all fields are valid", () => {
    const onSubmitStub = cy.stub();

    cy.mount(<CheckoutForm onSubmit={onSubmitStub} isPending={false} />);

    cy.get('input[name="cardNumber"]').type("4111 1111 1111 1111");
    cy.get('input[name="expiry"]').type("12/25");
    cy.get('input[name="cvv"]').type("123");
    cy.get('input[name="cardName"]').type("João da Silva");
    cy.get('input[name="cpf"]').type("123.456.789-09");
    cy.get('select[name="parcelas"]').select("3");
    cy.get("form").submit();

    cy.wrap(onSubmitStub).should("have.been.calledOnce");
  });
});
