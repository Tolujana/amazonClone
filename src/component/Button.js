import React from "react";

const Button = ({ className, Icon, position, children, onClick }) => {
  return (
    <div>
      {position === "left" && { Icon }}
      <button onClick={onClick} className={className}>
        {children}{" "}
      </button>
      {position === "right" && { Icon }}
    </div>
  );
};

export default Button;
