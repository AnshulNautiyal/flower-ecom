import React from "react";

export const RemoveItemModal = (props) => {
  const { id = "", image = "", handelRemoveCart } = props;
  return (
    <div className="removeModal">
      <div className="removeModal__image">
        <div className="image animate">
          <img src={image} />
        </div>
        <div className="removeModalContent">
          <h2>Remove from bag?</h2>
          <p>You can search for similar product.</p>
        </div>
      </div>
      <button type="button" onClick={handelRemoveCart(id)}>
        Remove
      </button>
    </div>
  );
};
