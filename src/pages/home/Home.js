import React from "react";
import Header from '../../components/HomeComponents/Header';
import Image from '../../components/HomeComponents/Image';
import Content from '../../components/HomeComponents/Content/Content';
import NeedHelp from '../../components/HomeComponents/NeedHelp/NeedHelp';
import Footer from '../../components/HomeComponents/Footer/Footer';
import ImageCarousel from '../../components/HomeComponents/ImageCarousel/ImageCarousel';


const Home = () => {

    return (
        <div className="HomePage">
            <Header />
            <Image header={"Lorem ipsum text"} subhead={"lorem ipsum sub text"} button={"Shop Now"} />
            <Content header={"Send a Subscription"} button={"Learn more"}/>
            <Image header={"Lorem ipsum text"} subhead={"lorem ipsum sub text"} button={"Check More"} />
            <Content header={"Send a Subscription"} subhead={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "} button={"Subscriptions"}/>
            <ImageCarousel />
            <NeedHelp />
            <Footer />
        </div>
    )
};

export default Home;