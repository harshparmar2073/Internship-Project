import axios from "axios";
// import { toast } from 'react-toastify';

const api = axios.create({
  // baseURL: "https://xhrf-api.herokuapp.com/v1/",
  // baseURL: "https://exchange-marketplace-865653925151.herokuapp.com/v1/",
  baseURL: "https://api.thexchangemarketplace.com/v1/",
  // baseURL: 'http://240c-2405-204-8103-c3d9-c9d1-bdef-5e92-4f1d.ngrok.io/',
  headers: {
    Apptoken: "X3qGRkZY-BB786BB-XYZ6653-MA2123",
  },
});

api.interceptors.request.use(
  function (config) {
    if (
      !localStorage.getItem("token") &&
      localStorage.getItem("token") === null &&
      window.location.pathname !== "/" &&
      window.location.pathname !== "/loginpage" &&
      window.location.pathname !== "/xchangeShop" &&
      window.location.pathname !== "/cart" &&
      !window.location.pathname.includes("/admin")
    ) {
      window.location.href = window.location.origin;
    } else {
      config.headers["Authorization"] = localStorage.getItem("token");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    if (response.data.message === "Please login to continue.") {
      localStorage.removeItem("token");
      localStorage.removeItem("profileAdded");
      window.location.href = window.location.origin;
      return Promise.reject("");
    }

    // if (
    //     response !== null ||
    //     response.data !== null ||
    //     response.data.errors.length !== 0
    // ) {
    //     response.data.errors.forEach((e) =>
    //         openSnackbar('error',e),
    //     );
    // } else {
    //     // openSnackbar('error',error.message);
    // }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const toFormData = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    formData.append(key, object[key]);
  });
  return formData;
};

export default api;
