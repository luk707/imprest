import React, { FunctionComponent } from "react";

interface ButtonProps {
  onClick: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick
}) => {
  return <button onClick={onClick}>{children}</button>;
};
