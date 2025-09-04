import React from "react";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-primary)] ${props.className || ""}`}
  />
);
