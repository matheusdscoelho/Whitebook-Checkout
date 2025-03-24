import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

export const Header = styled.header`
  padding: 12px 20px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.div`
  color: #1f2937;
  padding: 8px;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

export const BackIcon = styled(IoIosArrowBack)`
  cursor: pointer;
`;