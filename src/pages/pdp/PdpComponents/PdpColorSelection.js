import React, { useState } from "react";

const PdpColorSelection = (props) => {
  const { colors = [], colorSelection, refProps } = props;
  const [colorSelected, setColorSelected] = useState("");
  if (colors.length === 0) {
    return null;
  }

  const handleColorClick = (item) => () => {
    colorSelection(item);
    setColorSelected(item.color_id);
  };
  const getCarouselImage = (colors) => {
    return colors.map((item) => (
      <div
        className={`${colorSelected === item.color_id && "active"}`}
        key={item.color_id}
        style={{ backgroundColor: item.hex_code }}
        onClick={handleColorClick(item)}
      ></div>
    ));
  };
  return (
    <div className="colors" id="colorSection" ref={refProps}>
      <h2>Select colors</h2>
      <div>{colors.length && getCarouselImage(colors)}</div>
    </div>
  );
};

export default PdpColorSelection;
