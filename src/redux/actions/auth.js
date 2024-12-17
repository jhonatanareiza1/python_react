import axios from "axios";

import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "./types";

export const signup =
  (first_name, last_name, email, password, re_password) => async (dispach) => {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const body = JSON.stringify({
      first_name,
      last_name,
      email,
      password,
      re_password,
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/`,
        body,
        config
      );
      if (res.status === 200) {
        dispach({
          type: SIGNUP_SUCCESS,
          payload: res.data,
        });
      } else {
        dispach({ type: SIGNUP_FAIL });
      }
    } catch (err) {
      dispach({ type: SIGNUP_FAIL });
    }
  };
