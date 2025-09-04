import React from "react";

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    className={`w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-primary)] ${props.className || ""}`}
  />
);
