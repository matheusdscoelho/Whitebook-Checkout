"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { BackButton, BackIcon, Header, LogoContainer, Nav } from "./styles";

function Navbar() {
  const router = useRouter();

  return (
    <Header>
      <Nav>
        <BackButton
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <BackIcon width={24} height={24} />
        </BackButton>
        <LogoContainer>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='Logo'
              width={40}
              height={30}
              style={{ marginRight: 30 }}
            />
          </Link>
        </LogoContainer>
      </Nav>
    </Header>
  );
}

export default Navbar;
