"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BackButton, BackIcon, Header, LogoContainer, Nav } from "./styles";

function Navbar() {
  // const router = useRouter();

  return (
    <Header>
      <Nav>
        <BackButton >
          <BackIcon width={24} height={24}/>
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
