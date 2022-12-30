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
        return "skyblue";
      case "tetrominoes__l":
        return "lightgreen";
      case "tetrominoes__o":
        return "orange";
      case "tetrominoes__s":
        return "violet";
      case "tetrominoes__t":
        return "yellow";
      case "tetrominoes__z":
        return "whitesmoke";
      default:
        return "black";
    }
  }

  return (
    <div className="BoardCell">
      <div
        className={`${className}${
          className.length != 0 && !className.includes("ghost") ? " Tetro" : ""
        }`}
        style={{
          backgroundColor: className.includes("ghost")
            ? "none"
            : getColor(className),
          height: "100%",
          width: "100%",
          boxShadow: "2px",
        }}
      >
        <div
          className={`${getColor(className) != "black" ? "sparkle" : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default BoardCell;
