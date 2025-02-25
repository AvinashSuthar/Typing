"use client";

export const MagicButton = ({ child }: { child: string }) => {
  return (
    <button className="border text-base font-medium relative border-neutral-200    px-4 py-2 rounded-lg mt-4">
      <span>{child}</span>
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
    </button>
  );
};
