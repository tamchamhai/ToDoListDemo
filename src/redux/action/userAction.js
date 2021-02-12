import {
  ADD_USER,
  DEL_USER,
  EDIT_USER,
  SEARCH_KEY_WORD,
  UPDATE_USER,
} from "../constant/userConstant";

export const searchAction = (keyword) => {
  return {
    type: SEARCH_KEY_WORD,
    payload: keyword,
  };
};

export const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const delUserAction = (userID) => {
  return {
    type: DEL_USER,
    payload: userID,
  };
};

export const editUserAction = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};
export const updateUserAction = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};
