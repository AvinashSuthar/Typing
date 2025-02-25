import React, { JSX } from "react";
import { ModeToggle } from "./modeToggle";
import { FloatingNav } from "./components/ui/floatingNav";

const Navbar = ({
  signIn, 
  navItems,
  onNavigate,
}: {
  signIn: JSX.Element;
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  onNavigate: (link: string) => void;
}) => {
  return ( 
    <FloatingNav
      className="h-16" 
      modeToggle={<ModeToggle />}
      navItems={navItems}
      signIn={signIn}
      onNavigate={onNavigate}
    />
  );
};

export default Navbar;
