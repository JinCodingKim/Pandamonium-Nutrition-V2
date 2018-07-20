import axios from "axios";

const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";

const initialState = {
  isLoading: false,
  isError: "",
  products: [],
  product: []
};

export function getProducts(type) {
  return {
    type: GET_PRODUCTS,
    payload: axios.get(`/api/products?type=${type}`)
  };
}

export function getProductDetail(name) {
  return {
    type: GET_PRODUCT_DETAIL,
    payload: axios.get(`/api/products/${name}`)
  };
}

export default function shopReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_PRODUCTS}_PENDING`:
    case `${GET_PRODUCT_DETAIL}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_PRODUCTS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        products: payload.data
      };
    case `${GET_PRODUCT_DETAIL}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        product: payload.data
      };
    case `${GET_PRODUCTS}_REJECTED`:
    case `${GET_PRODUCT_DETAIL}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: payload.data
      };
    default:
      return state;
  }
}
