import React from "react";
import ReactDom from "react-dom";
import { OrderConfirmation } from "./OrderConfirmation";
import { getOrderDetails } from "./orderConfirmationApiCall";
export class OrderConfirmationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDetails: [],
      orderId: "",
      isOrderValid: false,
      errorMessage: "",
    };
  }

  componentDidMount() {
    this.setState({});
    const { location: { search = "" } = {} } = this.props;
    let orderId = String(search)
      .substr(1)
      .split("&")
      .find((item) => item.includes("order_id"));
    if (!orderId) {
      //Order id is not found in the url
    } else {
      orderId = orderId.split("=")[1];
      this.state.orderId = orderId;
    }
    console.log(
      "%c Order Confirmation Page Props",
      "background-color:green;color:white;",
      this.state.orderId
    );
    getOrderDetails(this.state.orderId, (data) => {
      this.orderDetailsFetched(data);
    })();
  }

  orderDetailsFetched(data) {
    console.log("orderDetailsFetched ", data);
    if (!data) {
      this.setState({
        isOrderValid: false,
        errorMessage: "Something went wrong",
      });
    } else {
      const {
        data: {
          data: { order_details = {} } = [],
          reponse_status = false,
          errorMessage = "",
        } = {},
      } = data;
      this.setState({
        orderDetails: order_details,
        isOrderValid: reponse_status,
        errorMessage: errorMessage,
      });
    }
  }

  render() {
    console.log("Inside Render");
    return (
      <OrderConfirmation
        isValid={this.state.isOrderValid}
        errorMessage={this.state.errorMessage}
        orderId={this.state.orderId}
        orderDetails={this.state.orderDetails}
      />
    );
  }
}
