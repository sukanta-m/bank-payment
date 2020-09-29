import axios from "./axios";

export const fetchCurrencies = () => axios().get(`/currencies`);
export const fetchBankInfo = params => axios().post("/v1/banks/find", params);