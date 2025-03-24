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
import { ClipLoader } from "react-spinners";
import { isValidCardNumber, isValidCPF } from "@/app/utils/functions";

const options = [1, 2, 3, 4, 5, 6];

const checkoutSchema = z.object({
  cardNumber: z
    .string()
    .length(19, { message: "Número do cartão deve ter 16 dígitos" })
    .regex(/^[0-9 ]+$/, {
      message: "Número do cartão deve conter apenas números",
    })
    .refine(
      (val) => {
        const cleanedCardNumber = val.replace(/\s/g, "");
        return cleanedCardNumber.length === 16 && isValidCardNumber(val);
      },
      { message: "Número do cartão inválido" }
    ),
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
  cardName: z
    .string()
    .min(3, {
      message: "Nome impresso no cartão deve ter pelo menos 3 caracteres",
    }),
  cpf: z
    .string()
    .length(14, { message: "CPF deve ter 11 dígitos" })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
      message: "Formato inválido. Exemplo: 000.000.000-00",
    })
    .refine(
      (val) => {
        const cleanedCpf = val.replace(/\D/g, "");
        return isValidCPF(cleanedCpf);
      },
      { message: "CPF inválido." }
    ),
  cupom: z.string().optional(),
  parcelas: z
    .string()
    .min(1, { message: "Por favor, selecione o número de parcelas" }),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

function CheckoutForm({
  onSubmit,
  isPending,
}: {
  onSubmit: (data: CheckoutFormData) => void;
  isPending: boolean;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  return (
    <Container>
      <Title>Estamos quase lá!</Title>
      <SubtitleTitle>Insira seus dados de pagamento abaixo:</SubtitleTitle>
      <Image
        src='/cardBrands.png'
        alt='Cards Brands'
        width={215}
        height={50}
        style={{ alignSelf: "center", marginTop:20 }}
      />
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
            aria-label='Número do cartão'
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
              type='tel'
              {...register("expiry")}
              placeholder='MM/AA'
              aria-label='Data de validade'
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
              type='tel'
              {...register("cvv")}
              placeholder='000'
              aria-label='CVV'
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
            placeholder='Seu nome'
            aria-label='Nome impresso no cartão'
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
            type='tel'
            {...register("cpf")}
            placeholder='000.000.000-00'
            aria-label='CPF'
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
            aria-label='Cupom'
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor='parcelas'>Número de Parcelas</Label>
          <Select id='parcelas' {...register("parcelas")} hasValue={!!watch("parcelas")}>
            <option value=''>Selecionar</option>
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

        <SubmitButton type='submit' disabled={isPending}>
          {isPending ? (
            <ClipLoader color='#fff' size={30} aria-label='Loading Spinner' />
          ) : (
            "Finalizar pagamento"
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default CheckoutForm;
