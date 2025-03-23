"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Container,
  Title,
  SubtitleTitle,
  Form,
  InputGroup,
  Label,
  Input,
  Select,
  InputMasked,
  ErrorMessage,
  FlexGroup,
  SubmitButton,
} from "./styles";
import Image from "next/image";
import { useSubscription } from "@/hooks/useSubscription";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const options = [1, 2, 3, 4, 5, 6];

const checkoutSchema = z.object({
  cardNumber: z
    .string()
    .length(19, { message: "Número do cartão deve ter 16 dígitos" })
    .regex(/^[0-9 ]+$/, {
      message: "Número do cartão deve conter apenas números",
    }),
  expiry: z
    .string()
    .length(5, { message: "Data de validade inválida" })
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
      message: "Formato inválido. Exemplo: MM/AA",
    }),
  cvv: z
    .string()
    .length(3, { message: "CVV deve ter 3 dígitos" })
    .regex(/^\d{3}$/, { message: "CVV deve conter apenas números" }),
  cardName: z.string().min(3, {
    message: "Nome impresso no cartão deve ter pelo menos 3 caracteres",
  }),
  cpf: z
    .string()
    .length(14, { message: "CPF deve ter 11 dígitos" })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
      message: "Formato inválido. Exemplo: 000.000.000-00",
    }),
  cupom: z.string().optional(),
  parcelas: z
    .string()
    .min(1, { message: "Por favor, selecione o número de parcelas" }),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

function CheckoutForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });
  const { mutate: subscribe } = useSubscription();

  const onSubmit = (data: CheckoutFormData) => {
    console.log("Form submitted", data);
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
          console.log("Payment successful!");
          router.push("/checkout/confirmation");
        },
        onError: (error) => {
          console.error("Payment failed", error);
          toast.error("O pagamento falhou! Tente novamente.");
        },
      }
    );
  };

  return (
    <Container>
      <Title>Estamos quase lá!</Title>
      <SubtitleTitle>Insira seus dados de pagamento abaixo:</SubtitleTitle>
      <Image src='/cardBrands.png' alt='Cards Brands' width={215} height={50} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label htmlFor='cardNumber'>Número do Cartão</Label>
          <InputMasked
            mask='____ ____ ____ ____'
            replacement={{ _: /\d/ }}
            id='cardNumber'
            type='tel'
            {...register("cardNumber")}
            placeholder='0000 0000 0000 0000'
          />
          {errors.cardNumber && (
            <ErrorMessage>{errors.cardNumber.message}</ErrorMessage>
          )}
        </InputGroup>

        <FlexGroup>
          <InputGroup>
            <Label htmlFor='expiry'>Validade</Label>
            <InputMasked
              mask='__/__'
              replacement={{ _: /\d/ }}
              id='expiry'
              type='text'
              {...register("expiry")}
              placeholder='MM/AA'
            />
            {errors.expiry && (
              <ErrorMessage>{errors.expiry.message}</ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor='cvv'>CVV</Label>
            <InputMasked
              mask='___'
              replacement={{ _: /\d/ }}
              id='cvv'
              type='text'
              {...register("cvv")}
              placeholder='000'
            />
            {errors.cvv && <ErrorMessage>{errors.cvv.message}</ErrorMessage>}
          </InputGroup>
        </FlexGroup>

        <InputGroup>
          <Label htmlFor='cardName'>Nome impresso no Cartão</Label>
          <Input
            id='cardName'
            type='text'
            {...register("cardName")}
            placeholder='Nome no cartão'
          />
          {errors.cardName && (
            <ErrorMessage>{errors.cardName.message}</ErrorMessage>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor='cpf'>CPF</Label>
          <InputMasked
            mask='___.___.___-__'
            replacement={{ _: /\d/ }}
            id='cpf'
            type='text'
            {...register("cpf")}
            placeholder='000.000.000-00'
          />
          {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor='cupom'>Cupom</Label>
          <Input
            id='cupom'
            type='text'
            {...register("cupom")}
            placeholder='Cupom (opcional)'
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor='parcelas'>Número de Parcelas</Label>
          <Select id='parcelas' {...register("parcelas")}>
            <option value=''>Selecione o número de parcelas</option>
            {options.map((parcelas: number) => (
              <option key={parcelas} value={parcelas}>
                {parcelas} parcela{parcelas > 1 ? "s" : ""}
              </option>
            ))}
          </Select>
          {errors.parcelas && (
            <ErrorMessage>{errors.parcelas.message}</ErrorMessage>
          )}
        </InputGroup>

        <SubmitButton type='submit'>Finalizar pagamento</SubmitButton>
      </Form>
    </Container>
  );
}

export default CheckoutForm;
