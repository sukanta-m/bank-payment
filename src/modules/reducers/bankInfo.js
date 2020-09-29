import {
  FTECH_BANKINFO_REQUEST, FTECH_BANKINFO_SUCCESS, FTECH_BANKINFO_FAILURE
} from "../constants";

const initialState = {
  fetchingBankDetails: false,
  details: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FTECH_BANKINFO_REQUEST:
      return {
        ...state,
        fetchingBankDetails: true
      }

    case FTECH_BANKINFO_SUCCESS:
      const { name, message } = payload;
      delete payload["name"];
      delete payload["message"];
      let error;
      if (message) {
        error = {
          name,
          message
        }
      }
      return {
        ...state,
        details: payload,
        fetchingBankDetails: false,
        error
      }

    case FTECH_BANKINFO_FAILURE:
      return {
        ...state,
        fetchingBankDetails: false,
        error: payload
      }
    
    default:
      return state
  }
}

