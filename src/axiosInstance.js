import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://finplan-finance-management-default-rtdb.firebaseio.com/",
});

export default axiosInstance;
