import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/images/logo.svg"
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href={"/"} className="flex items-center gap-2.5 cursor-pointer">
        <Image src={logo} alt="logo" height={46} width={46}/>
      </Link>
      <div className="flex items-center gap-8">
        <NavbarItems/>
        <p>SignIn</p>
      </div>
    </nav>
  );
};

export default Navbar;
