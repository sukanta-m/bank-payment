/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from "react-redux";
import { get } from "lodash";
import { fetchBankInfoAction } from "../modules/actions/bankInfo";

import BankInfo from "../components/BankInfo";

export default connect(state => ({
  bankDetails: get(state, "bankInfo.details"),
  fetchingBankDetails: get(state, "bankInfo.fetchingBankDetails")
}), {
  loadBankInfo: fetchBankInfoAction
})(BankInfo);