import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Mobile/Header/Header";
import { baseUrl } from "../../routes/Routes";
import * as pdpSelector from "./PdpSelectors";
import PdpContainer from "./PdpContainer";

export const Pdp = (props) => {
  const { pdpCartItemsCount = 0 } = props;
  const headerConfig = [
    {
      content: <ion-icon name="arrow-back-outline"></ion-icon>,
      action: () => window.history.back(),
    },
    {
      content: (
        <div className={`${pdpCartItemsCount > 0 && "cartIcon"}`}  data-cart-item={pdpCartItemsCount}>
          <ion-icon name="cart-outline"></ion-icon>
        </div>
      ),
      action: () => (window.location = baseUrl + "cart"),
    },
  ];

  return (
    <>
      <Header headerConfig={headerConfig} classProp="pdpHeader" />
      <PdpContainer />
    </>
  );
};

const mapStateToProps = (state) => ({
  pdpCartItemsCount: pdpSelector.getPdpCartItemsCount(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pdp);
