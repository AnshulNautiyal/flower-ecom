import React, { useState } from "react";
import { noop } from "../../../utils/defaultFunction";

const PLP_SORT_FILTER = [
  "Relevance",
  "Price(Lowest First)",
  "Price(Highest first)",
];

const radioButton = {
  check: <ion-icon name="radio-button-on-outline"></ion-icon>,
  unCheck: <ion-icon name="radio-button-off-outline"></ion-icon>,
};

const PlpSortFilter = ({ plpSortBy = noop }) => {
  const [checkUnCheck, setRadioState] = useState(true);
  const [sortByType, setSortByType] = useState(PLP_SORT_FILTER[0]);

  const updateState = (sortByType) => () => {
    setSortByType(sortByType);
    setRadioState((prevState) => ({
      checkUnCheck: !prevState.checkUnCheck,
    }));
    plpSortBy(sortByType);
  };

  const getFilter = () => {
    return PLP_SORT_FILTER.map((item) => {
      return (
        <div
          className="plpSort__filter--item"
          onClick={updateState(item)}
          key={item}
        >
          <input type="radio" name="sortBy" id={item} />
          {
            radioButton[
              checkUnCheck && sortByType === item ? "check" : "unCheck"
            ]
          }
          <label htmlFor={item}>{item}</label>
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
