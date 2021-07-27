import * as t from "../types";

const logginReducer = (state = "", action) => {
  switch (action.type) {
    case t.LOGG_IN:
      return action.payload;
    default:
      return state;
  }
};

export default logginReducer;
