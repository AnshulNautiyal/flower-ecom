import { plp_action_type } from "./plp-action";
import { PLP_SORT_FILTER } from "./plp-filter/PlpSortFilter";

function ascendingSort(a, b) {
  const priceA = parseInt(a.price);
  const priceB = parseInt(b.price);
  let comparison = 0;
  if (priceA > priceB) {
    comparison = 1;
  } else if (priceA < priceB) {
    comparison = -1;
  }
  return comparison;
}
function descendingSort(a, b) {
  const priceA = parseInt(a.price);
  const priceB = parseInt(b.price);
  let comparison = 0;
  if (priceA < priceB) {
    comparison = 1;
  } else if (priceA > priceB) {
    comparison = -1;
  }
  return comparison;
}
function plpReducer(state = {}, action) {
  const { type = "", payload } = action;
  switch (type) {
    case plp_action_type.GET_PLP_PRODUCT:
      return {
        ...state,
        ...payload,
      };

    case plp_action_type.PLP_SORT_BY:
      const { flowerData = [] } = state;
      let newFlowerData = [...flowerData];
      if (payload === PLP_SORT_FILTER.lowToHigh) {
        newFlowerData.sort(ascendingSort);
      } else if (payload === PLP_SORT_FILTER.highToLow) {
        newFlowerData.sort(descendingSort);
      }
      return {
        ...state,
        plpSortedData: newFlowerData,
        plpSortByType: payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export { plpReducer };
