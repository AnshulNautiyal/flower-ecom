import React from 'react';
import {OrderDetails} from './orderDetails';
import orderStatusImage from '../../static/images/order_status.jpg';
const OrderConfirmation = () => {
    const status='N';
    const isOrderSuccessful=status=='Y';
    const orderDetails={
        "cart_total": 15,
        "savings": 10,
        "delivery_charges": 18.5,
        "total_amount": 23.5
    };

    return (
        
        <div class="mainContainer">
              <div class="orderStatusContainer">
                  <ion-icon class={isOrderSuccessful?"statusIcon success":"statusIcon failure"} name={isOrderSuccessful?"checkmark":"close-outline"}></ion-icon>
                <div class="orderStatus">Order {isOrderSuccessful?"Confirmed":"Failure"}</div>
                <div class="orderId">Order ID: OR21321893B34</div>
              </div>
              <div class="orderDetailsContainer">
                  <OrderDetails orderDetails={orderDetails}></OrderDetails>
              </div>
              <div class="details">

              <img src={orderStatusImage} alt="Order"/>
                Thank you for visiting this website/Application Orangecart . Sygmos Technologies Pvt, Ltd. (“STPL”) is the licensed owner of the brand Orangecart and the website www.orangecart.in. STPL respects your privacy. Please read the terms and conditions before accessing this website. We operate this site for promoting and selling the products and services supplied by us. By using this site, you signify your acceptance of these conditions in return for which we will provide you with access. From time to time we may modify the conditions so please continue to review the conditions of use whenever accessing or using this site. If at any time you do not wish to accept these conditions then you may not use this site.
              </div>
              <div className="continueShopping">
                <button className="placeOrderBtn">
                    Continue Shopping
                </button>
            </div>
        </div>
      
    )
}

export default OrderConfirmation;