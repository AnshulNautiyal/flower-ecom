import React from "react";

const getCarouselImage = (images) => {
  return images.map((item) => (
    <div>
      <img src={item.imagePath} />
    </div>
  ));
};
const Carousel = (props) => {
  const { images = [] } = props;
  if (images.length === 0) {
    return null;
  }
  return (
    <div className="carousel">{images.length && getCarouselImage(images)}</div>
  );
};

export default Carousel;
