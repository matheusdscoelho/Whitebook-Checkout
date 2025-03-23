import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const Icon = styled.div`
  margin-bottom: 20px;
  font-size: 28px;
  border: 2px solid #f4f3f6;
  padding: 20px;
  border-radius: 50%;
`;

export const Title = styled.h4`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Subtitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #c9c5d4;
`;

export const Card = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 20px 0px #0000000d;
`;

export const CardPlan = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  background-color: #f4f3f6;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const CardContent = styled.p`
  font-size: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button<{ cancel?: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${(props) => (props.cancel ? "#FFF" : "#191847")};
  color: ${(props) => (props.cancel ? "#191847" : "#FFF")};
  border: none;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const PlanIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e1dee8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlanInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlanText = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #191847;
`;

export const PlanSubText = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #191847;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoText = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #c9c5d4;
`;

export const InfoValue = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #151516;
`;
