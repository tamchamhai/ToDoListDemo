import {
  ADD_USER,
  DEL_USER,
  EDIT_USER,
  SEARCH_KEY_WORD,
  UPDATE_USER,
} from "../constant/userConstant";
const initialState = {
  userList: [],
  userEdit: {},
  keyword: "",
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER: {
      let { userList } = state;
      const user = { ...payload, id: Math.random().toString() };
      userList = [...userList, user]; // tạo mảng mới để tránh tham chiếu
      // userList.push(payload);
      state.userList = userList;
      return { ...state };
    }
    case DEL_USER: {
      // const delUser = { ...state };
      // delUser.splice(payload, 1);
      const { userList } = state;
      const delList = [...userList];
      delList.splice(payload, 1);
      return { ...state, userList: delList };
    }
    case EDIT_USER: {
      // C1
      return { ...state, userEdit: payload };
      // C2
      state.userEdit = payload;
      return { ...state };
    }
    case UPDATE_USER: {
      const { userList } = state; // nhận state
      const newUserList = [...userList]; // gán newUserList = userList
      const index = newUserList.findIndex((user) => user.id === payload.id); // tìm vị trí của payload
      if (index !== -1) {
        newUserList[index] = payload; // gán payload cho newList
        return { ...state, userList: newUserList }; //setState newList
      }
    }
    case SEARCH_KEY_WORD: {
      return { ...state, keyword: payload };
    }
    default:
      return { ...state };
  }
};
export default userReducer;
