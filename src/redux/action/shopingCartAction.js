import {
  ADD_SELECTED_PRODUCT,
  ADD_TO_CART,
  CHANGE_DECREASE_PRODUCT,
  CHANGE_INCREASE_PRODUCT,
  DELETE_PRODUCT,
} from "../constant/shopingCartConstant";

export const addSelectedProduct = (product) => {
  return {
    type: ADD_SELECTED_PRODUCT,
    payload: product,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const changeDecreaseProduct = (index) => {
  return {
    type: CHANGE_DECREASE_PRODUCT,
    payload: index,
  };
};

export const changeIncreaseProduct = (index) => {
  return {
    type: CHANGE_INCREASE_PRODUCT,
    payload: index,
  };
};

export const deleteProduct = (index) => {
  return {
    type: DELETE_PRODUCT,
    payload: index,
  };
};
