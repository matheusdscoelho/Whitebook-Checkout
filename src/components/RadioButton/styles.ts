import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 20rem;
  min-width: 20rem;
`;

export const CardOption = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  border: 1px solid #191847;
  border-radius: 15px;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  height: 1rem;
  width: 1rem;
  color: #191847; /* Cor do radio button */
  accent-color: #191847; /* Define a cor do círculo do radio button */
`;

export const PlanDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  font-size: 12px;
  font-weight: 400;
  display: flex;
  justify-content: center;
`;

export const InstallmentPrice = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #f5850b;
`;

export const PriceDiscount = styled.div`
  font-size: 10px;
  font-weight: 400;
  border-radius: 1.25rem;
  text-align: center;
  margin-left: 1rem;
  padding: 1px;
  color: white;
  background-color: #f5850b;
  width: 2.5rem;
`;
