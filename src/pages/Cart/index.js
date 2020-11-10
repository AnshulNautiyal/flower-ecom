import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Header from "../../components/Mobile/Header/Header";
import Modal from "../../components/Common/Modal/Modal";
import { baseUrl } from "../../routes/Routes";
import { CartContainer } from "./CartContainer";
import { PlaceOrder } from "./PlaceOrder";
import { CartOrderDetails } from "./CartOrderDetails";
import { BagEmpty } from "./BagEmpty";
import { getCartItem, removeCartItem, updateQuantityCall } from "./cartApiCall";
import { setCartShimmer } from "./cart-action";
import { readCookies } from "../../utils/readBrowserCookies";
import {
  showModal,
  hideModal,
} from "../../components/Common/Modal/modal-action";
import {
  getCartItemSelectors,
  getCartOrderDetailsSelector,
  getCartItemCountSelectors,
  cartShimmer,
  getBagEmpty,
  getModalState,
} from "./cart-selector";
import { showLoader } from "../../components/Common/Loader/Loader-action";
import { LoaderStateSelector } from "../../components/Common/Loader/Loader-selector";
import { Loader } from "../../components/Common/Loader/Loader";
import CartShimmer from "./CartShimmer";
import { RemoveItemModal } from "./RemoveItemModal";
import { UpdateQuantity } from "./UpdateQuantity";

const Cart = (props) => {
  const {
    cartItemCount,
    getCartItem,
    cartItem,
    cartOrderDetails,
    showLoader,
    loaderState = false,
    toggleShimmer = true,
    isBagEmpty = false,
    cartShimmer,
    showModal,
    modalState: { type = "" } = {},
    removeCartItem,
    updateQuantityCall,
  } = props;
  const token = readCookies("A");
  const orderDetailSection = useRef(null);

  const [component, setComponent] = useState("");

  useEffect(() => {
    cartShimmer(true);
    token && getCartItem();
  }, []);

  const headerConfig = [
    {
      content: <ion-icon name="arrow-back-outline"></ion-icon>,
      action: () => window.history.back(),
    },
    {
      content: (
        <div className="cartStep">
          <div>Step 1 of 3</div>
          <div>Bag {cartItemCount ? `(${cartItemCount} Products)` : null}</div>
        </div>
      ),
      action: "",
    },
  ];
  const scrollToOrderDetail = () => {
    window.scrollTo(0, orderDetailSection.current.offsetTop - 100);
  };

  const handelRemoveCart = (id) => () => {
    showLoader(true);
    removeCartItem(id);
  };

  const openRemoveCartModal = (id, image) => () => {
    console.log(id, image);
    showModal("drawer");
    setComponent(
      <RemoveItemModal
        id={id}
        image={image}
        handelRemoveCart={handelRemoveCart}
      />
    );
  };

  const updateColorQuantity = (id, qty) => () => {
    showLoader(true);
    updateQuantityCall(id, qty);
  };

  const openUpdateQuantityModal = (qty, colorCode, colorName, cartId) => () => {
    console.log(qty,colorName)
    showModal("drawer");
    setComponent(
      <UpdateQuantity
        qty={qty}
        colorCode={colorCode}
        colorName={colorName}
        cartId={cartId}
        updateColorQuantity={updateColorQuantity}
      />
    );
  };
  const redirectToCart  = () => {
    if (readCookies("A") && readCookies("user_type") !== "L") {
      window.location.href = "signin?referrer=/shipping";
      return;
    }
    window.location.href = baseUrl + "shipping";
  }

  return (
    <div className="cartPage">
      <Header headerConfig={headerConfig} classProp="cartHeader" />
      {loaderState && <Loader />}
      {!token || toggleShimmer && <CartShimmer />}
      {!token || isBagEmpty ? <BagEmpty /> : null}
      {cartItem.length ? (
        <CartContainer
          cartItem={cartItem}
          openRemoveCartModal={openRemoveCartModal}
          openUpdateQuantityModal={openUpdateQuantityModal}
        />
      ) : null}
      {cartItem.length ? (
        <CartOrderDetails cartOrderDetails={cartOrderDetails} />
      ) : null}
      <PlaceOrder
        cartOrderDetails={cartOrderDetails}
        scrollToOrderDetail={scrollToOrderDetail}
        refProps={orderDetailSection}
        isBagEmpty={isBagEmpty}
        redirectToCart={redirectToCart}
        cartItemCount={cartItem.length}
      />
      <Modal type={type}>{component}</Modal>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    cartItem: getCartItemSelectors(state),
    cartOrderDetails: getCartOrderDetailsSelector(state),
    cartItemCount: getCartItemCountSelectors(state),
    toggleShimmer: cartShimmer(state),
    loaderState: LoaderStateSelector(state),
    isBagEmpty: getBagEmpty(state),
    modalState: getModalState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCartItem: () => dispatch(getCartItem()),
    showLoader: (bool) => dispatch(showLoader(bool)),
    cartShimmer: (bool) => dispatch(setCartShimmer(bool)),
    showModal: (modalType = "") => dispatch(showModal(modalType)),
    hideModal: (modalType = "") => dispatch(hideModal(modalType)),
    removeCartItem: (id) => dispatch(removeCartItem(id)),
    updateQuantityCall: (id,quantity) => dispatch(updateQuantityCall(id,quantity)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
