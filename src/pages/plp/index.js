import React from "react";
import { connect } from "react-redux";
import PlpFilter from "./plp-filter/PlpFilter";
import Modal from "../../components/Common/Modal/Modal";
import PlpCard from "./PlpCard";
import Header from "../../components/Mobile/Header/Header";
import { noop } from "../../utils/defaultFunction";
import getPlpData from "./plpApiCall";
import * as plpSelectors from "./plpSelectors";
import { showModal } from "../../components/Common/Modal/modal-action";
import { plpSortBy } from "../../pages/plp/plp-action";

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
  render() {
    const {
      plpData = {},
      showModal = noop,
      plpSortBy = noop,
      modalState: { type = "" } = {},
    } = this.props;
    const { productCard = [] } = plpData;
    const { component = "" } = this.state;

    const plpProductList = productCard.map((item) => <PlpCard {...item} />);

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
          {plpProductList}
          <PlpFilter
            showModal={showModal}
            setModalContent={this.setModalContent}
            plpSortBy={plpSortBy}
          />
          <Modal type={type}>{component}</Modal>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    plpData: plpSelectors.getPlpData(state),
    modalState: plpSelectors.getModalState(state),
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
