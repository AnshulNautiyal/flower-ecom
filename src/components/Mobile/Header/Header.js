import React from "react";

const Header = (props) => {
  const { headerConfig = [] } = props;

  const headerContent = headerConfig.map((item, index) => (
    <div onClick={item.action} key={index}>
      {item.content}
    </div>
  ));
  return <div className="Header">{headerContent}</div>;
};

export default Header;
