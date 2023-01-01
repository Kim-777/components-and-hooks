import React from "react";

type Props = {
  direction: "prev" | "next";
  onClick: () => void;
};

const SlideButton = ({ direction, onClick }: Props) => {
  return (
    <button onClick={onClick} style={{ width: "30px", height: "30px" }}>
      {direction}
    </button>
  );
};

export default SlideButton;
