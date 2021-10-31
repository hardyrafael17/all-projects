import React from "react";

export const Tile = ({ tile }) => {
  const tileArrayValues = Object.values(tile);
  return (
    <div className="tile-container">
      {tileArrayValues.map((element, index) => {
        return (
          <p className={index === 0 ? "tile-title" : "tile"}>{element}</p>
        )
      })}
    </div>
  );
};
