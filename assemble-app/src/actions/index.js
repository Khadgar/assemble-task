import {
    CHANGE_QUANTITY,
    CHANGE_ROUTE,
    ADD_USERINFO,
    CHANGE_ORDER_STATUS,
    GET_DATA
  } from "../constants/action-types";
  
  export function getData(payload) {
    return { type: GET_DATA, payload };
  }

  export function changeQuantity(payload) {
    return { type: CHANGE_QUANTITY, payload };
  }
  
  export function changeRoute(payload) {
    return { type: CHANGE_ROUTE, payload };
  }
  
  export function addUserinfo(payload) {
    return { type: ADD_USERINFO, payload };
  }
  
  export function changeOrderStatus(payload) {
    return { type: CHANGE_ORDER_STATUS, payload };
  }
  