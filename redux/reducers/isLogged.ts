import * as t from "../types";

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case t.SIGN_IN:
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
