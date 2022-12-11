import { Box } from "@chakra-ui/react";
import React from "react";
import "./BoardCell.css";
const BoardCell = ({ cell }) => {
  const { className } = cell;
  function getColor(tetromino) {
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
    <div
      className={`BoardCell ${className}`}
      // border={"2px solid red"}
      // borderRadius={"6px"}
      style={{
        backgroundColor: getColor(className),
        border: "2px solid",
        borderColor: getColor(className) == "red" ? "black" : "red",
        borderRadius: "6px",
      }}
    >
      <div className="sparkle"></div>
    </div>
  );
};

export default BoardCell;