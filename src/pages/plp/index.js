import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import PlpFilter from "./plp-filter/PlpFilter";
import Modal from "../../components/Common/Modal/Modal";
import Toast from "../../components/Common/Toast/Toast";
import Header from "../../components/Mobile/Header/Header";
import PlpShimmer from "./PlpShimmer";
import { noop } from "../../utils/defaultFunction";
import { getPlpData } from "./plpApiCall";
import * as plpSelectors from "./plpSelectors";
import { showModal } from "../../components/Common/Modal/modal-action";
import { plpSortBy } from "../../pages/plp/plp-action";
const PlpCard = lazy(() => import("./PlpCard"));

class Plp extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      component: "",
    };
  }
  componentDidMount() {
    const { getPlpData = noop } = this.props;
    getPlpData();
  }

  setModalContent = (component = "") => {
    this.setState({
      component,
    });
  };

  getPlpHeaderData = () => {
    const { plpData: { numberOfItem = "", plpHeader = "" } = {} } = this.props;
    return (
      <div className="headerContent">
        <p>{plpHeader}</p>
        <p>{numberOfItem} Products</p>
      </div>
    );
  };

  plpBannerElement = (plpBanner, plpBannerSlogan) => (
    <div className="plpBanner">
      <div className="plpBanner__image">
        <img src={plpBanner} alt="Plp Banner" />
        <div className="plpBanner__image--text">
          <div>{plpBannerSlogan}</div>
        </div>
      </div>
    </div>
  );
  render() {
    const {
      plpData = {},
      showModal = noop,
      plpSortBy = noop,
      modalState: { type = "" } = {},
      toastState: { toastShowOrHide = false } = {},
    } = this.props;
    const {
      productCard = [],
      plpBanner = "",
      plpBannerSlogan = "",
      plpFetchDataFail = "",
    } = plpData;
    const { component = "" } = this.state;

    const plpProductList = productCard.map((item, index) => (
      <PlpCard {...item} key={item.flower_id} />
    ));

    const headerConfig = [
      {
        content: <ion-icon name="arrow-back-outline"></ion-icon>,
        action: () => window.history.back(),
      },
      {
        content: this.getPlpHeaderData(),
        action: () => window.history.back(),
      },
      {
        content: <ion-icon name="search-outline"></ion-icon>,
        action: () => window.history.back(),
      },
    ];
    return (
      <>
        <Header headerConfig={headerConfig} />
        <div className="plpContainer">
          <Suspense fallback={<PlpShimmer />}>
            {plpBanner && this.plpBannerElement(plpBanner, plpBannerSlogan)}
            {plpProductList}
            {productCard.length ? (
              <PlpFilter
                showModal={showModal}
                setModalContent={this.setModalContent}
                plpSortBy={plpSortBy}
              />
            ) : null}
          </Suspense>
          <Modal type={type}>{component}</Modal>
          {toastShowOrHide && <Toast message={plpFetchDataFail} />}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    plpData: plpSelectors.getPlpData(state),
    modalState: plpSelectors.getModalState(state),
    toastState: state.toastState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlpData: (filterData = {}) => dispatch(getPlpData(filterData)),
    showModal: (modalType = "") => dispatch(showModal(modalType)),
    plpSortBy: (modalType = "") => dispatch(plpSortBy(modalType)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Plp);
