import styled from "styled-components";
import { InputMask } from "@react-input/mask";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: start;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -2%;
`;

export const SubtitleTitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -2%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  margin-top: 1rem;
  padding: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #666173;
`;

export const InputMasked = styled(InputMask)`
  width: 100%;
  max-width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  background: transparent;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c9c5d4;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 0.5rem 0;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  background: transparent;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: #c9c5d4;
  }
`;

export const Select = styled.select`
  width: 100%;
  max-width: 100%;
  padding: 8px 12px;
  margin: 8px 0;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  font-weight: 400;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

   &:invalid {
    color: #C9C5D4;
  }

  option {
    padding: 8px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.75rem;
`;

export const FlexGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    flex: 1;
    min-width: 0;
  }
`;

export const SubmitButton = styled.button`
  background-color: #191847;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 1.563rem;
  width: 70%;
  height: 3.125rem;
  cursor: pointer;
  transition: background 0.3s;
  align-self: center;

  &:hover {
    background-color: #191847;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
