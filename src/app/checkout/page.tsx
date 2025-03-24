"use client";

import CheckoutForm, { CheckoutFormData } from "@/components/Forms/Checkout";
import RadioButton from "@/components/RadioButton";
import { usePlans } from "@/hooks/usePlans";
import React, { useState, useEffect } from "react";
import {
  Container,
  Icon,
  InfoText,
  PlanContainer,
  PlanInfo,
  PlanTitle,
} from "./styles";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useSubscription } from "@/hooks/useSubscription";

const Checkout = () => {
  const router = useRouter();

  const { data: plans, isLoading } = usePlans();
  const { mutate: subscribe, isPending } = useSubscription();

  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (plans && selectedCard) {
      const selectedPlan = plans.find((plan) => plan.id.toString() === selectedCard);
      setIsFormValid(!!selectedPlan);
    }
  }, [selectedCard, plans]);

  const onSubmit = (data: CheckoutFormData) => {
    if (!isFormValid) {
      toast.error("Por favor, selecione um plano antes de finalizar.");
      return;
    }

    subscribe(
      {
        couponCode: data.cupom || null,
        creditCardCPF: data.cpf,
        creditCardCVV: data.cvv,
        creditCardExpirationDate: data.expiry,
        creditCardHolder: data.cardName,
        creditCardNumber: data.cardNumber.replace(/\s/g, ""),
        gateway: "test_gateway",
        installments: parseInt(data.parcelas),
        offerId: 123,
        userId: 456,
      },
      {
        onSuccess: () => {
          const plan = plans?.find((plan) => plan.id.toString() === selectedCard);
          if (plan) {
            router.push(`/checkout/confirmation?cpf=${data.cpf}&plan=${plan.title}&planPrice=${plan.fullPrice}`);
            toast.success("O pagamento foi um sucesso!");
          }
        },
        onError: (error) => {
          toast.error("O pagamento falhou! Tente novamente.");
          console.error(error);
        },
      }
    );
  };

  const handleCardSelection = (cardId: string) => {
    setSelectedCard(cardId);
  };

  return (
    <Container>
      <CheckoutForm onSubmit={onSubmit} isPending={isPending} />
      <PlanContainer>
        <PlanTitle>Confira o seu plano:</PlanTitle>
        <PlanInfo>fulano@cicrano.com.br</PlanInfo>
        {!isLoading && plans ? (
          <RadioButton
            plans={plans}
            handleChange={handleCardSelection}
            selected={selectedCard}
          />
        ) : (
          <ClipLoader
            color='#191847'
            size={100}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        )}
        <InfoText>
          Sobre a cobrança <Icon />
        </InfoText>
      </PlanContainer>
    </Container>
  );
};

export default Checkout;
