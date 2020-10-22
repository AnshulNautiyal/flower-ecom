import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { showLoader } from "../../components/Common/Loader/Loader-action";
import { selectColorAction, colorNotSelected } from "./Pdp-action";
import { LoaderStateSelector } from "../../components/Common/Loader/Loader-selector";
import * as pdpSelector from "./PdpSelectors";
import Carousel from "./PdpComponents/Carousel";
import { Loader } from "../../components/Common/Loader/Loader";
import PdpProductDescription from "./PdpComponents/PdpProductDescription";
import PdpColorSelection from "./PdpComponents/PdpColorSelection";
import ProductDetails from "./PdpComponents/ProductDetails";
import PdpButtons from "./PdpComponents/PdpButtons";
import Alert from "../../components/Common/Alert/Alert";
import { PdpData } from "./PdpApiCall";

const PDP_MESSAGE = {
  sizeNotSelected: "Please select color.",
};
const PdpContainer = (props) => {
  const {
    images = [],
    fetchPdpData,
    showLoader,
    match: { params = {} },
    loaderState = false,
    productDetail,
    selectColor,
    selectedColor,
    showAlertMessage,
    colorNotSelectedInfo,
  } = props;

  const { message = "", showHide = false } = colorNotSelectedInfo;
  const colorSection = useRef(null);

  useEffect(() => {
    showLoader(true);
    fetchPdpData({
      flowerId: params.id,
    });
  }, [params.id]);

  const colorSelection = (colorData = {}) => {
    selectColor(colorData);
    showAlertMessage({
      showHide: false,
      message: "",
    });
  };
  const handleAddToBag = () => {
    const { color_id = "" } = selectedColor;
    if (!color_id) {
      window.scrollTo(0, colorSection.current.offsetTop - 100);
      showAlertMessage({
        showHide: true,
        message: PDP_MESSAGE.sizeNotSelected,
      });
      return;
    }
    showLoader(true);
  };

  return (
    <>
      {loaderState && <Loader />}
      <div className="pdpContainer">
        <Carousel images={images} />
        <PdpProductDescription productDetail={productDetail} />
        <PdpColorSelection
          colors={images}
          colorSelection={colorSelection}
          refProps={colorSection}
        />
        {showHide && <Alert message={message} />}
        <ProductDetails
          productDetail={productDetail}
          images={images.length > 0 ? images[0] : {}}
        />
        <PdpButtons handleAddToBag={handleAddToBag} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loaderState: LoaderStateSelector(state),
  images: pdpSelector.getPdpImages(state),
  productDetail: pdpSelector.getProductDescription(state),
  selectedColor: pdpSelector.getSelectedSize(state),
  colorNotSelectedInfo: pdpSelector.colorNotSelectedInfo(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPdpData: (productCode) => dispatch(PdpData(productCode)),
    showLoader: (bool) => dispatch(showLoader(bool)),
    selectColor: (colorDetail = {}) => dispatch(selectColorAction(colorDetail)),
    showAlertMessage: (object = {}) => dispatch(colorNotSelected(object)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PdpContainer)
);
