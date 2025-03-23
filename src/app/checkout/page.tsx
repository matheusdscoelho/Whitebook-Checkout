"use client";

import CheckoutForm from "@/components/Forms/Checkout";
import RadioButton from "@/components/RadioButton";
import { usePlans } from "@/hooks/usePlans";
import React from "react";
import { Container, PlanContainer, PlanInfo, PlanTitle } from "./styles";

const Checkout = () => {
  const { data: plans } = usePlans();
  return (
    <Container>
      <CheckoutForm />
      <PlanContainer>
        <PlanTitle>Confira o seu plano:</PlanTitle>
        <PlanInfo>fulano@cicrano.com.br</PlanInfo>
        <RadioButton plans={plans ?? []} />
      </PlanContainer>
    </Container>
  );
};

export default Checkout;
