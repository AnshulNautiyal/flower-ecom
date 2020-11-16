import React, { useState, useEffect } from "react";

const PdpColorSelection = (props) => {
  // Props
  const { colors = [], colorSelection, refProps, selectedColor } = props;

  // state
  const [colorSelected, setColorSelected] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentSelectedColor, setCurrentSelectedColor] = useState({});

  // life cycle
  useEffect(() => {
    Object.keys(selectedColor).length &&
      colorSelection({
        ...currentSelectedColor,
        quantity,
      });
  }, [quantity, currentSelectedColor]); // update the selected color quantity in redux also to get latest quantity in parent component

  //  custom function
  const updateQty = (type, item = {}) => () => {
    if (quantity > 1 && type === "REMOVE") {
      setQuantity((qty) => --qty); // decrease color quantity
    } else if (type === "ADD") {
      setQuantity((qty) => ++qty); // increase color quantity
    }
  };

  const handleColorClick = (item) => () => {
    colorSelection({
      ...item,
      quantity,
    }); // save color selected data in Redux
    setColorSelected(item.color_id); // get Current Color ID selected in local state;
    setCurrentSelectedColor(item); // get Current Color selected in local state;
    setQuantity(1); // set Quantity to 1 if selected color change;
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
  if (colors.length === 0) {
    return null;
  }
  return (
    <div className="colors" id="colorSection" ref={refProps}>
      <h2>Select colors</h2>
      <div className="colors__tiles">
        {colors.length && getCarouselImage(colors)}
      </div>
      {Object.keys(selectedColor).length ? (
        <div className="colors__quantity">
          <ion-icon
            name="remove-outline"
            onClick={updateQty("REMOVE")}
          ></ion-icon>
          <div>{quantity}</div>
          <ion-icon name="add-outline" onClick={updateQty("ADD")}></ion-icon>
        </div>
      ) : null}
      {/* TODO: commenting it for future use */}
      {/* {quantity === 5 && (
        <div className="colors__message">
          You reached the product max quantity
        </div>
      )} */}
    </div>
  );
};

export default PdpColorSelection;
