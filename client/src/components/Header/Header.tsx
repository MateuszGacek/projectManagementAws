import React from "react";

type headerProps = {
  name: String;
  buttonComponent?: React.ReactNode;
  isSmallText?: boolean;
};
function Header({ name, buttonComponent, isSmallText }: headerProps) {
  return (
    <div className="mb-5 flex w-full items-center justify-between">
      <h1
        className={`${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`}
      >
        {name}
      </h1>
      {buttonComponent}
    </div>
  );
}

export default Header;
