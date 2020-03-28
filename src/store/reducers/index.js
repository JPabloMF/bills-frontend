import { SAVE_LOGIN, CLEAN_LOGIN } from "../actions/types";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_LOGIN:
      return {
        ...state,
        result: action.data
      };
    case CLEAN_LOGIN:
      return state;
    default:
      return state;
  }
};
