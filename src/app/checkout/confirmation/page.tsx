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
import { useSearchParams } from "next/navigation";

export default function Confirmation() {
  const params = useSearchParams()
  const  cpf = params.get('cpf');
  const  plan = params.get('plan');
  const  planPrice = params.get('planPrice');

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
              R${Number(planPrice ?? 0).toFixed(2)} | 10x R${(Number(planPrice ?? 0) / 10).toFixed(2)}
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
        <Button cancel='true'>Gerenciar Assinatura</Button>
        <Button>IR PARA A HOME</Button>
      </ButtonsContainer>
    </Container>
  );
}
