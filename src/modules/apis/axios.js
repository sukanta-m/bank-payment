import axios from "axios";

const getExtraHeader = () => {
  return {
    "client-id": process.env.REACT_APP_CLIENTID,
    "signature": process.env.REACT_APP_SIGNATURE
  }
}

export default () => axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    ...getExtraHeader()
  }
});