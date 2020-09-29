import {
  FTECH_BANKINFO_REQUEST, FTECH_BANKINFO_SUCCESS, FTECH_BANKINFO_FAILURE
} from "../constants";

import { rf } from "./routefusion-sdk";

export const fetchBankInfoAction = params => {
  return dispatch => {
    dispatch({ type: FTECH_BANKINFO_REQUEST })
    return rf.findBank(params)
    .then(response => dispatch({type: FTECH_BANKINFO_SUCCESS, payload: response}))
    .catch(error => {
      dispatch({type: FTECH_BANKINFO_FAILURE, payload: error})
    });
  }
}