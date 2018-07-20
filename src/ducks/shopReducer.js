import axios from "axios";

const GET_PRODUCTS = "GET_PRODUCTS";

const initialState = {
  isLoading: false,
  isError: "",
  products: []
};

export function getProducts(type) {
  return {
    type: GET_PRODUCTS,
    payload: axios.get(`/api/products?type=${type}`)
  };
}

export default function shopReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_PRODUCTS}_PENDING`:
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
    case `${GET_PRODUCTS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isError: payload.data
      };
    default:
      return state;
  }
}
