import api from "@/service/api";
import { useQuery } from "@tanstack/react-query";


const fetchPlans = async () => {
  const { data } = await api.get("/offer");
  return data;
};

export function usePlans() {
  return useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
    staleTime: 1000 * 60 * 5,
  });
}