import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'></nav>
      <Link href={'/'}>
        <Image src="/logo.svg" alt="Logo" width={100} height={30} />
      </Link>
    </header>
  );
}

export default Navbar;
