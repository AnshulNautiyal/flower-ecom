import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { showLoader } from "../../components/Common/Loader/Loader-action";
import { LoaderStateSelector } from "../../components/Common/Loader/Loader-selector";
import * as pdpSelector from "./PdpSelectors";
import Carousel from "./PdpComponents/Carousel";
import { Loader } from "../../components/Common/Loader/Loader";
import PdpProductDescription from "./PdpComponents/PdpProductDescription";
import PdpColorSelection from "./PdpComponents/PdpColorSelection";
import ProductDetails from "./PdpComponents/ProductDetails";
import PdpButtons from "./PdpComponents/PdpButtons";
import { PdpData } from "./PdpApiCall";

const PdpContainer = (props) => {
  const {
    images = [],
    fetchPdpData,
    showLoader,
    match: { params = {} },
    loaderState = false,
    productDetail,
  } = props;

  useEffect(() => {
    showLoader(true);
    fetchPdpData({
      flowerId: params.id,
    });
  }, [params.id]);

  return (
    <>
      {loaderState && <Loader />}
      <div className="pdpContainer">
        <Carousel images={images} />
        <PdpProductDescription productDetail={productDetail} />
        <PdpColorSelection colors={images} />
        <ProductDetails
          productDetail={productDetail}
          images={images.length > 0 ? images[0] : {}}
        />
        <PdpButtons />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loaderState: LoaderStateSelector(state),
  images: pdpSelector.getPdpImages(state),
  productDetail: pdpSelector.getProductDescription(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPdpData: (productCode) => dispatch(PdpData(productCode)),
    showLoader: (bool) => dispatch(showLoader(bool)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PdpContainer)
);
