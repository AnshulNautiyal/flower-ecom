import React from "react";

const getCarouselImage = (colors) => {
  return colors.map((item) => (
    <div style={{ backgroundColor: item.hex_code }}></div>
  ));
};

const PdpColorSelection = (props) => {
  const { colors = [] } = props;
  if (colors.length === 0) {
    return null;
  }
  return (
    <div className="colors">
      <h2>Select colors</h2>
      <div>{colors.length && getCarouselImage(colors)}</div>
    </div>
  );
};

export default PdpColorSelection;
