import * as t from "../types";

export const increment = () => {
  return {
    type: t.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: t.DECREMENT,
  };
};

export const signIn = () => {
  return {
    type: t.SIGN_IN,
  };
};

export const inputfield = (data) => {
  return {
    type: t.LOGG_IN,
    payload: data,
  };
};
