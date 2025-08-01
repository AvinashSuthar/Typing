"use client";
import Navbar from "@repo/ui/Navbar";
import { useRouter } from "next/navigation";
import React from "react";
import SignIn from "./SignIn";

const Nav = () => {
  const router = useRouter();
  return (
    <Navbar
      signIn={<SignIn />}
      onNavigate={router.push}
      navItems={[
        {
          name: "Home",
          link: "/",

        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        
        {
          name: "Github",
          link: "https://github.com/AvinashSuthar/Typing",
        },
      ]}
    />
  );
};

export default Nav;
