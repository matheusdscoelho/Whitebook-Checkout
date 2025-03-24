import { AiTwotoneQuestionCircle } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 50px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
     margin-top: 10px;
    padding: 20px;
    align-content: start;
    text-align: start;
    gap: 1.5rem;
  }
`;

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const PlanTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -2%;
`;

export const PlanInfo = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  border: 1px solid #f4f3f6;
  color: #151516;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  width: fit-content;
`;

export const InfoText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
  font-weight: 400;
  font-size: 12px;
`;

export const Icon = styled(AiTwotoneQuestionCircle)`
  margin-top: 3px;
  width: 16px;
  height: 16px;
`;
