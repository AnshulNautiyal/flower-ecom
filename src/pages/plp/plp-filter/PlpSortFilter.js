import React, { useState } from "react";
import { noop } from "../../../utils/defaultFunction";

export const PLP_SORT_FILTER = {
  relevance: "Relevance",
  lowToHigh: "Price(Lowest First)",
  highToLow: "Price(Highest first)",
};

const radioButton = {
  check: <ion-icon name="radio-button-on-outline"></ion-icon>,
  unCheck: <ion-icon name="radio-button-off-outline"></ion-icon>,
};

const PlpSortFilter = ({ plpSortBy = noop }) => {
  const [checkUnCheck, setRadioState] = useState(true);
  const [sortByType, setSortByType] = useState(PLP_SORT_FILTER.relevance);

  const updateState = (sortByType) => () => {
    setSortByType(sortByType);
    setRadioState((prevState) => ({
      checkUnCheck: !prevState.checkUnCheck,
    }));
    plpSortBy(sortByType);
    window.scrollTo(0, 0);
  };

  const getFilter = () => {
    return Object.keys(PLP_SORT_FILTER).map((item) => {
      return (
        <div
          className="plpSort__filter--item"
          onClick={updateState(PLP_SORT_FILTER[item])}
          key={PLP_SORT_FILTER[item]}
        >
          <input type="radio" name="sortBy" id={PLP_SORT_FILTER[item]} />
          {
            radioButton[
              checkUnCheck && sortByType === PLP_SORT_FILTER[item]
                ? "check"
                : "unCheck"
            ]
          }
          <label htmlFor={PLP_SORT_FILTER[item]}>{PLP_SORT_FILTER[item]}</label>
        </div>
      );
    });
  };
  return (
    <div className="plpSort__filter">
      <h2>Sort By</h2>
      {getFilter()}
    </div>
  );
};

export default PlpSortFilter;
