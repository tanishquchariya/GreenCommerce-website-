import {
  ADMIN_DATA_ERROR,
  ADMIN_DATA_LOADING,
  ADMIN_DATA_SUCCESS,
  POST_ADMIN_DATA_ERROR,
  POST_ADMIN_DATA_SUCCESS,
  POST_ADMIN_DATA_LOADING,
  DELETE_ADMIN_DATA,
  FILTERING_ADMIN_DATA,
} from "./admin.type";

let initialState = {
  loading: false,
  error: false,
  data: [],
  isActive: 1,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_DATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADMIN_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case ADMIN_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case POST_ADMIN_DATA_SUCCESS: {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    case DELETE_ADMIN_DATA: {
    

      return {
        ...state,
        data: payload,
      };
    }
    case FILTERING_ADMIN_DATA: {
      return {
        ...state,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
