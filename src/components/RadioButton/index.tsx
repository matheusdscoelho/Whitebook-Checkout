"use client";

import { Plan } from "@/hooks/usePlans";
import React from "react";
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
  selected: string | null;
  plans: Plan[];
  handleChange: (planId: string) => void;
}

function RadioButton({ selected, plans, handleChange }: RadioButtonProps) {
  return (
    <CardContainer>
      {plans.map((plan) => (
        <CardOption
          key={plan.id}
          onClick={() => handleChange(plan.id.toString())}
        >
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
              checked={selected === plan.id.toString()}
              onChange={() => handleChange(plan.id.toString())}
            />
          </div>
        </CardOption>
      ))}
    </CardContainer>
  );
}

export default RadioButton;
