import React from "react";

const getCarouselImage = (images) => {
  return images.map((item) => <img src={item.imagePath} key={item.color_id} />);
};
const Carousel = (props) => {
  const { images = [] } = props;
  if (images.length === 0) {
    return <div className="carousel"></div>;
  }
  return (
    <div className="carousel">
      <div>{images.length && getCarouselImage(images)}</div>
    </div>
  );
};

export default Carousel;
