import React from 'react'
import { connect } from 'react-redux';
import Header from "../../components/Mobile/Header/Header";
import PdpContainer from "./PdpContainer";

export const Pdp = () => {

    const headerConfig = [
        {
          content: <ion-icon name="arrow-back-outline"></ion-icon>,
          action: () => window.history.back(),
        },
        {
          content: <ion-icon name="cart-outline"></ion-icon>,
          action: () => window.history.back(),
        },
      ];

    return (
        <>
            <Header headerConfig={headerConfig} classProp="pdpHeader"/>
            <PdpContainer />
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Pdp)
