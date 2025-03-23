import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 20px;
  }
`;

export const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const PlanTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -2%;
`;

export const PlanInfo = styled.span`
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
