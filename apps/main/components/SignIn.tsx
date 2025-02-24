import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton>
          <button className="relative inline-flex h-12 overflow-hidden rounded-lg  p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg  px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl bg-white dark:bg-black">
              Sign In
            </span>
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default SignIn;
