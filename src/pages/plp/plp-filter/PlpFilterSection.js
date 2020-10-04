import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { hideModal } from "../../../components/Common/Modal/modal-action";
import { showLoader } from "../../../components/Common/Loader/Loader-action";
import * as plpSelectors from "../plpSelectors";
import { LoaderStateSelector } from "../../../components/Common/Loader/Loader-selector";
import { getFilterData, getPlpData } from "../plpApiCall";
import Header from "../../../components/Mobile/Header/Header";
import { Loader } from "../../../components/Common/Loader/Loader";

const checkBoxState = {
  check: <ion-icon name="checkbox"></ion-icon>,
  unCheck: <ion-icon name="checkbox-outline"></ion-icon>,
};
const radioButton = {
  check: <ion-icon name="radio-button-on-outline"></ion-icon>,
  unCheck: <ion-icon name="radio-button-off-outline"></ion-icon>,
};

const getPlpHeaderData = (props) => {
  const { plpFilterData: { numberOfItem = "" } = {} } = props;
  return (
    <div className="headerContent">
      <p>Filters</p>
      <p>{numberOfItem} Products</p>
    </div>
  );
};

const PlpFilterSection = (props) => {
  const {
    loaderState = false,
    plpFilterData: { plpFilterData = {} } = {},
  } = props;
  const filterName = Object.keys(plpFilterData);

  const [radioCheck, setRadioCheck] = useState({});
  const [filterList, setFilterList] = useState({});
  const [filterCheckOrNot, setFilterCheckOrNot] = useState({});
  const [filterSelected, setFilterSelected] = useState({});

  useEffect(() => {
    if (filterName.length > 0) {
      setRadioCheck({ [filterName[0]]: true });
      setFilterList({
        filterName: filterName[0],
        [filterName[0]]: plpFilterData[filterName[0]],
      });
    }
  }, [filterName.length]);

  useEffect(() => {
    props.showLoader(true);
    props.getFilterData();
  }, []);

  const closeFullModal = () => {
    props.hideFullModal();
  };
  const handleClick = (event, item) => {
    setRadioCheck({
      [item]: true,
    });
    setFilterList({ filterName: item, [item]: plpFilterData[item] });
  };

  const resetFilter = (close = "") => {
    setFilterCheckOrNot({});
    setFilterSelected({});
    close && closeFullModal();
  };
  const handleFilterSelected = (event, item) => {
    if ("category_id" in item) {
      setFilterSelected((prevState) => {
        return {
          ...prevState,
          category: item.category_id,
        };
      });
      setFilterCheckOrNot((prevState) => {
        return {
          ...prevState,
          category_id: item.category_id,
        };
      });
    } else if ("price_range_id" in item) {
      setFilterSelected((prevState) => {
        return {
          ...prevState,
          price_range: item.price_range_id,
        };
      });
      setFilterCheckOrNot((prevState) => {
        return {
          ...prevState,
          price_range_id: item.price_range_id,
        };
      });
    } else if ("color_id" in item) {
      setFilterSelected((prevState) => {
        if ("color_id" in filterSelected) {
          const index = prevState.color_id.indexOf(item.color_id);
          if (index > -1) {
            const tempArray = [...prevState.color_id];
            tempArray.splice(index, 1);
            return {
              ...prevState,
              color_id: [...tempArray],
            };
          } else {
            return {
              ...prevState,
              color_id: [...prevState.color_id, item.color_id],
            };
          }
        } else {
          return {
            ...prevState,
            color_id: [item.color_id],
          };
        }
      });
    }
  };
  const getFilterName = (filterName = []) => {
    return filterName.map((item) => (
      <div key={item} className={`${radioCheck[item] && "whiteColor"}`}>
        <input
          type="radio"
          name="flowerFilter"
          id={item}
          checked={radioCheck[item]}
          onClick={(event) => handleClick(event, item)}
        />
        <label htmlFor={item}>{item}</label>
      </div>
    ));
  };

  const getFilterList = (filterName = "", filterList = {}) => {
    if (!filterName) {
      return null;
    }
    if (filterName.toLowerCase() === "color") {
      return filterList[filterName].map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            name="flowerFilter"
            id={item.id}
            checked={
              filterSelected["color_id"] &&
              filterSelected["color_id"].indexOf(item.color_id) > 0
            }
            onClick={(event) => handleFilterSelected(event, item)}
          />
          {
            checkBoxState[
              filterSelected["color_id"] &&
              filterSelected["color_id"].indexOf(item.color_id) > -1
                ? "check"
                : "unCheck"
            ]
          }
          <label
            className="colorLabel"
            htmlFor={item.color_id}
            style={{ backgroundColor: `${item.hex_code}` }}
          ></label>
          <div>{item.name}</div>
        </div>
      ));
    }
    return filterList[filterName].map((item) => (
      <div key={item.id}>
        <input
          type="radio"
          name="flowerFilter"
          id={item.id}
          checked={
            filterCheckOrNot["category_id"] === item.category_id ||
            filterCheckOrNot["price_range_id"] === item.category_id
          }
          onClick={(event) => handleFilterSelected(event, item)}
        />
        {item.category_id &&
          radioButton[
            filterCheckOrNot["category_id"] === item.category_id
              ? "check"
              : "unCheck"
          ]}
        {item.price_range_id &&
          radioButton[
            filterCheckOrNot["price_range_id"] === item.price_range_id
              ? "check"
              : "unCheck"
          ]}

        <label htmlFor={item.id}>{item.name}</label>
      </div>
    ));
  };

  const headerConfig = [
    {
      content: <ion-icon name="arrow-back-outline"></ion-icon>,
      action: () => closeFullModal(),
    },
    {
      content: getPlpHeaderData(props),
      action: () => {},
    },
    {
      content: (
        <div className="resetNclose" onClick={() => resetFilter("close")}>
          Reset & Close
        </div>
      ),
      action: () => {},
    },
  ];

  const applyFilter = () => {
    props.showLoader(true);
    props.getPlpData(filterSelected);
  };
  return (
    <>
      {loaderState && <Loader />}
      <div className="plpFilterSection">
        <Header headerConfig={headerConfig} />
        <div className="plpFilterSection__body">
          <div className="plpFilterSection__body--left">
            {getFilterName(filterName)}
          </div>
          <div className="plpFilterSection__body--right">
            {getFilterList(filterList.filterName, filterList)}
          </div>
        </div>
        <div className="plpFilterSection__button">
          <button onClick={() => resetFilter()}>Reset</button>
          <button onClick={() => applyFilter()}>Apply Filter</button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    plpFilterData: plpSelectors.PlpFilterSelector(state),
    loaderState: LoaderStateSelector(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPlpData: (filterData = {}) => dispatch(getPlpData(filterData)),
    hideFullModal: () => dispatch(hideModal(false)),
    showLoader: (bool) => dispatch(showLoader(bool)),
    getFilterData: () => dispatch(getFilterData(false)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PlpFilterSection);
