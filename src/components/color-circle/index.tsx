import React from "react";

interface ColorCircleProps {
  color: string;
  selected?: boolean;
  onClick?: () => void;
}

const ColorCircle = ({ color, selected, onClick }: ColorCircleProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: color,
        width: "1.65rem",
        height: "1.65rem",
        borderRadius: "50%",
        border: selected ? "0.5px solid black" : "1px solid transparent",
        boxShadow: selected ? "0px 0px 5px rgba(0,0,0,0.5)" : "none",
        display: "inline-block",
        cursor: "pointer",
        transition: "box-shadow 0.3s ease", // Agregar una transición suave
      }}
    />
  );
};

export default ColorCircle;
