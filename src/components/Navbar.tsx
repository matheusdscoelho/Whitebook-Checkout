"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const Header = styled.header`
  padding: 12px 20px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled.button`
  color: #4b5563;
  padding: 8px;

  &:hover {
    color: #1f2937;
  }
`;

const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const BackIcon = styled(IoIosArrowBack)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

function Navbar() {
  const router = useRouter();

  return (
    <Header>
      <Nav>
        <BackButton onClick={() => router.back()}>
          <BackIcon />
        </BackButton>
        <LogoContainer>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='Logo'
              width={40}
              height={30}
              style={{ marginRight: 48 }}
            />
          </Link>
        </LogoContainer>
      </Nav>
    </Header>
  );
}

export default Navbar;
