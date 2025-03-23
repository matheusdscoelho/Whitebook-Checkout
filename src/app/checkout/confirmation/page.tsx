"use client";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import {
  Button,
  ButtonsContainer,
  Card,
  CardContent,
  CardPlan,
  Container,
  Icon,
  InfoRow,
  InfoText,
  InfoValue,
  PlanIcon,
  PlanInfo,
  PlanSubText,
  PlanText,
  Subtitle,
  Title,
} from "./styles";

interface ConfirmationProps {
  plan: string;
  cpf: string;
  price: number;
}

export default function Confirmation({
  plan = "Anual | A Vista",
  cpf = "000.000.000-00",
  price = 499,
}: ConfirmationProps) {
  return (
    <Container>
      <Icon>
        <FaCheck />
      </Icon>

      <Title>Parabéns!</Title>

      <Subtitle>
        Sua assinatura foi realizada <p>com sucesso.</p>
      </Subtitle>

      <Card>
        <CardPlan>
          <PlanIcon>
            <CiStar />
          </PlanIcon>
          <PlanInfo>
            <PlanText>{plan}</PlanText>
            <PlanSubText>
              R${price} | 10x R${price / 10}
            </PlanSubText>
          </PlanInfo>
        </CardPlan>
        <CardContent>
          <InfoRow>
            <InfoText>Email</InfoText>
            <InfoValue>fulano@cicrano.com.br</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoText>CPF</InfoText>
            <InfoValue>{cpf}</InfoValue>
          </InfoRow>
        </CardContent>
      </Card>

      <ButtonsContainer>
        <Button cancel>Gerenciar Assinatura</Button>
        <Button>Ir para Home</Button>
      </ButtonsContainer>
    </Container>
  );
}
