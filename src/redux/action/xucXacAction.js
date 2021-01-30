import { XU_LY_BAN_CHON } from "../constant/xucXacConstant.js";
// Action kiểu cũ
// const action = {
//   type: "XU_LY_BAN_CHON",
//   payload: taiOrXiu,
// };

// Action creator
export const xuLyBanChonAction = (taiOrXiu) => {
  return {
    type: XU_LY_BAN_CHON,
    payload: taiOrXiu,
  };
};
