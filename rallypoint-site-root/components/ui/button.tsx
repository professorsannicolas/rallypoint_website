import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "outline" | "solid" };

export const Button: React.FC<Props> = ({ className = "", variant = "solid", ...props }) => {
  const base = "px-4 py-2 font-medium rounded-2xl transition-colors";
  const styles =
    variant === "outline"
      ? "border border-[var(--brand-primary)] text-[var(--brand-primary)] bg-white hover:bg-gray-50"
      : "bg-[var(--brand-primary)] text-white hover:opacity-95";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
};
