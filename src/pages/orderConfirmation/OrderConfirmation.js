import React from "react";
import { OrderDetails } from "./orderDetails";
import orderStatusImage from "../../static/images/order_status.jpg";
import { getOrderDetails } from "./orderConfirmationApiCall";
import { render } from "@testing-library/react";
export class OrderConfirmation extends React.Component {
  isOrderSuccessful = false;
  isOrderValid = false;
  orderDetails = {};
  errorMessage = "";
  orderId = "xxxxxxxxxxxxxxxx";
  constructor(props) {
    super(props);
  }

  render() {
    console.log(
      "In componentDidMount function of Order Confirmation",
      this.props
    );
    this.isOrderSuccessful =
      this.props.isValid &&
      ![6, 7, 8].includes(Number(this.props.orderDetails.order_status_id));
    this.isOrderValid = this.props.isValid;
    this.orderDetails = this.props.orderDetails;

    this.errorMessage = this.props.errorMessage;
    this.orderId = this.props.orderId;

    if (!this.isOrderValid) {
      return (
        <div className="mainContainer">
          <div className="orderStatusContainer fullScreen">
            <ion-icon class="statusIcon warning" name="warning"></ion-icon>
            <div className="orderStatus">{this.errorMessage}</div>
          </div>
          <div className="continueShopping">
            <button
              className="placeOrderBtn"
              onClick={() => this.continueShopping()}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="mainContainer">
        <div className="orderStatusContainer">
          <ion-icon
            class={
              this.isOrderSuccessful
                ? "statusIcon success"
                : "statusIcon failure"
            }
            name={this.isOrderSuccessful ? "checkmark" : "close-outline"}
          ></ion-icon>
          <div className="orderStatus">
            Order {this.isOrderSuccessful ? "Confirmed" : "Failure"}
          </div>
          <div className="orderId">{`Order ID: ${this.orderId}`} </div>
        </div>
        <div className="orderDetailsContainer">
          <OrderDetails orderDetails={this.orderDetails}></OrderDetails>
        </div>
        <div className="details">
          <img src={orderStatusImage} alt="Order" />
          Thank you for visiting this website/Application Orangecart . Sygmos
          Technologies Pvt, Ltd. (“STPL”) is the licensed owner of the brand
          Orangecart and the website www.orangecart.in. STPL respects your
          privacy. Please read the terms and conditions before accessing this
          website. We operate this site for promoting and selling the products
          and services supplied by us. By using this site, you signify your
          acceptance of these conditions in return for which we will provide you
          with access. From time to time we may modify the conditions so please
          continue to review the conditions of use whenever accessing or using
          this site. If at any time you do not wish to accept these conditions
          then you may not use this site.
        </div>
        <div className="continueShopping">
          <button
            className="placeOrderBtn"
            onClick={() => this.continueShopping()}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  continueShopping() {
    window.location.href = "/c/products";
  }
}
