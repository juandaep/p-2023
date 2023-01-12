import React, { FC } from "react";

interface BtnProps {
  bgColor: string;
  textColor: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: FC<BtnProps> = ({
  bgColor,
  textColor,
  children,
  onClick,
  leftIcon,
  rightIcon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} flex px-4 py-2 gap-2 rounded-lg justify-center items-center`}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;
