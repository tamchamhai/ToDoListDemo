import {
  ADD_SELECTED_PRODUCT,
  ADD_TO_CART,
  CHANGE_DECREASE_PRODUCT,
  CHANGE_INCREASE_PRODUCT,
  DELETE_PRODUCT,
} from "../constant/shopingCartConstant";

const initialState = {
  productList: [
    {
      id: 1,
      src: "./img/vsphone.jpg",
      model: "VinSmart Live",
      screen: '"AMOLED, 6.2", Full HD+',
      os: "Android 9.0 (Pie)",
      frontCamera: "20 PM",
      mainCamera: "Chính 64 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "256 GB",
      price: 7500000,
      productAmount: 0,
    },
    {
      id: 2,
      src: "./img/sp_blackberry.png",
      model: "Blackberry 16Xs",
      screen: "AMOLED, FHD+ 2232 x 1080 pixels",
      os: "Android 9.0 (Pie)",
      frontCamera: "20 PM",
      mainCamera: "Chính 148 MP & Phụ 28 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 11000000,
      productAmount: 0,
    },
    {
      id: 3,
      src: "./img/applephone.jpg",
      model: "Iphone XS Max",
      screen: 'OLED, 6.5", 1242 x 2688 Pixels',
      os: "IOS 14",
      frontCamera: "20 PM",
      mainCamera: "Chính 108 MP & Phụ 18 MP, 15 MP",
      ram: "8 GB",
      rom: "256 GB",
      price: 25000000,
      productAmount: 0,
    },
  ],
  productDetails: {
    id: 3,
    src: "./img/applephone.jpg",
    model: "Iphone XS Max",
    screen: 'OLED, 6.5", 1242 x 2688 Pixels',
    os: "IOS 14",
    frontCamera: "20 PM",
    mainCamera: "Chính 108 MP & Phụ 18 MP, 15 MP",
    ram: "8 GB",
    rom: "256 GB",
    price: 25000000,
    productAmount: 0,
  },
  cartList: [],
};

const shopingCartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SELECTED_PRODUCT: {
      let { productDetails } = state;
      productDetails = { ...payload };
      state.productDetails = productDetails;
      return { ...state };
    }
    case ADD_TO_CART: {
      let { cartList } = state;
      const index = cartList.findIndex((item) => item.id === payload.id);
      if (index === -1) {
        cartList = [...cartList, { ...payload, productAmount: 1 }];
        state.cartList = cartList;
        // return { ...state };
      } else {
        cartList[index].productAmount++;
        state.cartList = [...cartList];
        // return { ...state };
      }
    }
    case CHANGE_DECREASE_PRODUCT: {
      const { cartList } = state;
      state.cartList = [...cartList];
    }
    case CHANGE_INCREASE_PRODUCT: {
      const { cartList } = state;
      state.cartList = [...cartList];
    }
    case DELETE_PRODUCT: {
      const { cartList } = state;
      state.cartList = [...cartList];
    }
    default:
      return { ...state };
  }
};

export default shopingCartReducer;
