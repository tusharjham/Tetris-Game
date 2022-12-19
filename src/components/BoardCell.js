import React from "react";
import "./BoardCell.css";
const BoardCell = ({ cell }) => {
  const { className } = cell;
  function getColor(tetromino) {
    if (tetromino.includes("fast")) {
      tetromino = tetromino.substring(1, 15);
    }
    switch (tetromino) {
      case "tetrominoes__i":
        return "red";
      case "tetrominoes__j":
        return "blue";
      case "tetrominoes__l":
        return "green";
      case "tetrominoes__o":
        return "orange";
      case "tetrominoes__s":
        return "violet";
      case "tetrominoes__t":
        return "yellow";
      case "tetrominoes__z":
        return "white";
      default:
        return "black";
    }
  }

  return (
    <div className="BoardCell">
      <div
        className={`${className}`}
        style={{
          backgroundColor: className.includes("ghost")
            ? "none"
            : getColor(className),
          border: className.includes("ghost") ? "2px solid white" : "",
          height: "100%",
          width: "100%",
          boxShadow: "2px",
        }}
      ></div>
    </div>
  );
};

export default BoardCell;
