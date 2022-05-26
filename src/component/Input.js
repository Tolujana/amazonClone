import React from "react";

const Input = ({ className, Icon, position }) => {
  return (
    <>
      {position === "left" && Icon}
      <input type="text" className={className} />
      {position === "right" && Icon}
    </>
  );
};

export default Input;
