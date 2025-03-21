"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const checkoutSchema = z.object({
  cardNumber: z
    .string()
    .length(16, { message: 'Número do cartão deve ter 16 dígitos' })
    .regex(/^\d+$/, { message: 'Número do cartão deve conter apenas números' }),
  expiry: z
    .string()
    .length(5, { message: 'Data de validade inválida' })
    .regex(/^\d{2}\/\d{2}$/, { message: 'Formato inválido. Exemplo: MM/AA' }),
  cvv: z
    .string()
    .length(3, { message: 'CVV deve ter 3 dígitos' })
    .regex(/^\d+$/, { message: 'CVV deve conter apenas números' }),
  cardName: z.string().min(3, { message: 'Nome impresso no cartão deve ter pelo menos 3 caracteres' }),
  cpf: z
    .string()
    .length(11, { message: 'CPF deve ter 11 dígitos' })
    .regex(/^\d+$/, { message: 'CPF deve conter apenas números' }),
  cupom: z.string().optional(),
  parcelas: z
    .number()
    .min(1, { message: 'Número de parcelas deve ser maior que 0' })
    .max(12, { message: 'Número de parcelas não pode ser maior que 12' }),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardSelection = (cardId: string) => {
    setSelectedCard(cardId);
  };

  const onSubmit = (data: CheckoutFormData) => {
    console.log('Form submitted', data);
  };

  return (
    <div className="flex">
      {/* Formulário */}
      <div className="w-1/2 p-8 space-y-4">
        <h2 className="text-2xl font-bold">Dados do Pagamento</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium">Número do Cartão</label>
            <input
              id="cardNumber"
              type="text"
              {...register('cardNumber')}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="1234 5678 9101 1121"
            />
            {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="expiry" className="block text-sm font-medium">Validade</label>
              <input
                id="expiry"
                type="text"
                {...register('expiry')}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="MM/AA"
              />
              {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry.message}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-sm font-medium">CVV</label>
              <input
                id="cvv"
                type="text"
                {...register('cvv')}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="123"
              />
              {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="cardName" className="block text-sm font-medium">Nome impresso no Cartão</label>
            <input
              id="cardName"
              type="text"
              {...register('cardName')}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Nome no cartão"
            />
            {errors.cardName && <p className="text-red-500 text-sm">{errors.cardName.message}</p>}
          </div>

          <div>
            <label htmlFor="cpf" className="block text-sm font-medium">CPF</label>
            <input
              id="cpf"
              type="text"
              {...register('cpf')}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="CPF"
            />
            {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf.message}</p>}
          </div>

          <div>
            <label htmlFor="cupom" className="block text-sm font-medium">Cupom</label>
            <input
              id="cupom"
              type="text"
              {...register('cupom')}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Cupom (opcional)"
            />
          </div>

          <div>
            <label htmlFor="parcelas" className="block text-sm font-medium">Número de Parcelas</label>
            <input
              id="parcelas"
              type="number"
              {...register('parcelas')}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Número de Parcelas"
            />
            {errors.parcelas && <p className="text-red-500 text-sm">{errors.parcelas.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md"
          >
            Finalizar pagamento
          </button>
        </form>
      </div>

      {/* Cards */}
      <div className="w-1/2 p-8 space-y-4">
        <h2 className="text-2xl font-bold">Escolha o Cartão</h2>
        <div className="space-y-4">
          {['Cartão 1', 'Cartão 2', 'Cartão 3'].map((card, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`card${index}`}
                name="card"
                value={card}
                checked={selectedCard === card}
                onChange={() => handleCardSelection(card)}
                className="h-4 w-4 text-blue-500"
              />
              <label htmlFor={`card${index}`} className="ml-2 text-lg">{card}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
