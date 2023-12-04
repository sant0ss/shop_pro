import React from "react";

const arrowStyle = {
  width: "20px", // Defina o tamanho desejado para suas setas
  height: "20px",
  background: "red", 
  color: "black",
  borderRadius: "50%", // Use o borderRadius para criar uma forma de círculo
  cursor: "pointer",
};

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow" onClick={onClick} style={arrowStyle}>
    
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-next-arrow" onClick={onClick} style={arrowStyle}>
  </div>
);

export { CustomPrevArrow, CustomNextArrow };
