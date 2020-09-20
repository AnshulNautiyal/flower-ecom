import React from "react";
import { connect } from "react-redux";
import { noop } from "../../../utils/defaultFunction";
import { hideModal } from "./modal-action";

const TypeClass = {
  drawer: "drawer",
  fullModal: "fullModal",
  customModal: "customModal",
};

const Modal = (props) => {
  let closeButton = null,
    showHideClass = "";
  const {
    children,
    hideModal = noop,
    modalState: { showOrHide = false, modalType = "" } = {},
  } = props;
  const closeModal = (event) => hideModal();
  const modalHideOff = (event) => event.stopPropagation();
  if (showOrHide) {
    showHideClass = "displayBlock";
    document.body.style.overflow = "hidden";
  } else {
    showHideClass = "displayNone";
    document.body.style.overflow = "auto";
  }

  if (modalType === "drawer") {
    closeButton = (
      <div className="modal__container--close" onClick={closeModal}>
        <ion-icon name="close-circle-outline"></ion-icon>
      </div>
    );
  }

  return (
    <div className={`modal ${showHideClass}`} onClick={closeModal}>
      <div
        className={`modal__container ${TypeClass[modalType]}`}
        onClick={modalHideOff}
      >
        {closeButton}
        <div className="modal__container--content">{children}</div>
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const { modalState = {} } = state;
  return {
    modalState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideModal: () => dispatch(hideModal(false)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
