import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};
