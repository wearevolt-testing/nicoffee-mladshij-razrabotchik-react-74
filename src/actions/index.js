import axios from "axios";
import * as types from "../types";

const requestProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

const receiveProducts = response => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  items: response.data
});

const requestCreateProduct = () => ({
  type: types.CREATE_PRODUCT_REQUEST
});

const receiveCreateProduct = response => ({
  type: types.CREATE_PRODUCT_SUCCESS,
  items: response.data
});

const requestCustomers = () => ({
  type: types.FETCH_CUSTOMERS_REQUEST
});

const receiveCustomers = response => ({
  type: types.FETCH_CUSTOMERS_SUCCESS,
  items: response.data
});

export const fetchProducts = () => dispatch => {
  dispatch(requestProducts());
  return axios
    .get("/api/products")
    .then(response => dispatch(receiveProducts(response)));
};

export const fetchCustomers = () => dispatch => {
  dispatch(requestCustomers());
  return axios
    .get("/api/customers")
    .then(response => dispatch(receiveCustomers(response)));
};

export const addProduct = () => dispatch => {
  dispatch(requestCreateProduct());
  return axios
    .post("/api/products")
    .then(response => dispatch(receiveCreateProduct(response)));
};
