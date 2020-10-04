import React from "react";
import PlpSortFilter from "./PlpSortFilter";
import PlpFilterSection from "./PlpFilterSection";

const PlpFilter = ({ showModal, setModalContent, plpSortBy }) => {
  const handleClickEvent = (modalType = "", component = "") => () => {
    showModal(modalType);
    setModalContent(component);
  };
  return (
    <div className="plpFilter">
      <div
        className="plpFilter__filter"
        onClick={handleClickEvent("fullModal", <PlpFilterSection />)}
      >
        <ion-icon name="filter"></ion-icon>
        <span>Filter</span>
      </div>
      <div
        className="plpFilter__sort"
        onClick={handleClickEvent(
          "drawer",
          <PlpSortFilter plpSortBy={plpSortBy} />
        )}
      >
        <ion-icon name="list-outline"></ion-icon>
        <span>Sort</span>
      </div>
    </div>
  );
};
export default PlpFilter;
