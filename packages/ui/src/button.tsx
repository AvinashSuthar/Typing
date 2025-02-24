"use client";

import { ReactNode } from "react";

export const Button = () => {
  return (
    <button className="border" onClick={() => alert(`Hello from your app!`)}>
      hello
    </button>
  );
};
