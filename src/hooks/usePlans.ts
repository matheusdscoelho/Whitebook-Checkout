import api from "@/service/api";
import { useQuery } from "@tanstack/react-query";

export type Plan = {
  id: number;
  storeId: string;
  title: string;
  description: string;
  caption: string;
  fullPrice: number;
  discountAmmount: number;
  discountPercentage: number;
  periodLabel: string;
  period: string;
  discountCouponCode: string | null;
  order: number;
  priority: number;
  gateway: string;
  splittable: boolean;
  installments: number;
  acceptsCoupon: boolean;
};

const fetchPlans = async (): Promise<Plan[]> => {
  const { data } = await api.get("/offer");
  return data;
};

export function usePlans() {
  return useQuery<Plan[]>({
    queryKey: ["plans"],
    queryFn: fetchPlans,
  });
}
