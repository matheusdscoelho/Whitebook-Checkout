import api from "@/service/api";
import { useMutation } from "@tanstack/react-query";

type PaymentInfo = {
    couponCode: string | null;
    creditCardCPF: string;
    creditCardCVV: string;
    creditCardExpirationDate: string;
    creditCardHolder: string;
    creditCardNumber: string;
    gateway: string;
    installments: number;
    offerId: number;
    userId: number;
  };

const subscribe = async (paymentData: PaymentInfo) => {
  const { data } = await api.post("/subscription", paymentData);
  return data;
};

export function useSubscription() {
  return useMutation({
    mutationFn: subscribe,
  });
}