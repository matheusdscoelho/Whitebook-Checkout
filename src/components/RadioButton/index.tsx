"use client";

import { Plan } from "@/hooks/usePlans";
import React, { useState } from "react";
import {
  CardContainer,
  CardOption,
  RadioInput,
  PlanDetails,
  Title,
  PriceWrapper,
  Price,
  InstallmentPrice,
  PriceDiscount,
} from "./styles";

interface RadioButtonProps {
  plans: Plan[];
}

function RadioButton({ plans }: RadioButtonProps) {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardSelection = (cardId: string) => {
    setSelectedCard(cardId);
  };

  return (
    <CardContainer>
      {plans.map((plan) => (
        <CardOption key={plan.id}>
          <PlanDetails>
            <Title>
              {plan.title} | {plan.description}
            </Title>
            <PriceWrapper>
              <Price>
                De {plan.fullPrice} | Por{" "}
                {plan.fullPrice - plan.discountAmmount}
                <PriceDiscount>-{plan.discountPercentage * 100}%</PriceDiscount>
              </Price>
            </PriceWrapper>
            <InstallmentPrice>
              10x de R${plan.fullPrice / 10}/mês
            </InstallmentPrice>
          </PlanDetails>
          <div style={{ display: "flex", alignItems: "center" }}>
            <RadioInput
              type='radio'
              id={plan.id.toString()}
              name='card'
              value={plan.id.toString()}
              checked={selectedCard === plan.id.toString()}
              onChange={() => handleCardSelection(plan.id.toString())}
            />
          </div>
        </CardOption>
      ))}
    </CardContainer>
  );
}

export default RadioButton;
