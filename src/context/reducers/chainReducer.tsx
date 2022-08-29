import React from "react";
import {
  CREATE_HOTELS_SUCCESSFUL,
  GET_HOTELS_FAIL,
  GET_HOTELS_LOADING,
  GET_HOTELS_SUCCESSFUL,
} from "../../constants/actionTypes";

const chainReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_HOTELS_LOADING:
      return {
        ...state,
        getHotels: {
          ...state.getHotels,
          loading: true,
          data: [],
        },
      };
    case GET_HOTELS_SUCCESSFUL:
      return {
        ...state,
        getHotels: {
          ...state.getHotels,
          loading: false,
          data: payload,
        },
      };
    case GET_HOTELS_FAIL:
      return {
        ...state,
        getHotels: {
          ...state.getHotels,
          loading: false,
          data: [],
          error: payload,
        },
      };

    case CREATE_HOTELS_SUCCESSFUL:
      return {
        ...state,
        createHotel: {
          ...state.createHotel,
          loading: false,
          data: payload,
          error: null,
        },
        getHotels: {
          ...state.getHotels,
          loading: false,
          data: [...state.createHotel.data, { ...payload }],
          error: null,
        },
      };

    default:
      return state;
  }
};

export default chainReducer;
